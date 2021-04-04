import { ActionContext, ActionTree } from 'vuex'
import { ChannelMutations, ChannelMutationTypes } from './mutations'
import { ChannelState } from './state'
import { RootState } from '@/store'
import { Channel } from '@/types/model/channel/channel'
import { loadChannelById, loadChannels } from '@/dummy/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'
import { loadChannelRoomGroupByChannelId } from '@/dummy/channel/roomGroup'
import { ChannelRoomGroupInfo } from '@/types/model/channel/roomGroup'
import { loadChannelRoomsByChannelRoomGroupId } from '@/dummy/channel/room'

export enum ChannelActionTypes {
  SET_CHANNELS = 'CHANNEL_SET_CHANNELS',
  SET_CURRENT_CHANNEL = 'CHANNEL_SET_CURRENT_CHANNEL',
  SET_CURRENT_ROOM = 'CHANNEL_SET_CURRENT_ROOM',
  LOAD_CHANNELS = 'CHANNEL_LOAD_CHANNELS',
  LOAD_CHANNEL_BY_ID = 'CHANNEL_LOAD_CHANNEL_BY_ID',
  INIT_CHANNEL_INFO = 'CHANNEL_INIT_CHANNEL_INFO',
  RESET_CHANNEL_INFO = 'CHANNEL_RESET_CHANNEL_INFO'
}

export type AugmentedActionContext = {
  commit<K extends keyof ChannelMutations>(
    key: K,
    payload?: Parameters<ChannelMutations[K]>[1]
  ): ReturnType<ChannelMutations[K]>
} & Omit<ActionContext<ChannelState, RootState>, 'commit'>

export interface ChannelActions {
  [ChannelActionTypes.SET_CHANNELS](
    { commit }: AugmentedActionContext,
    payload: Array<Channel>
  ): void
  [ChannelActionTypes.SET_CURRENT_CHANNEL](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ChannelActionTypes.SET_CURRENT_ROOM](
    { commit }: AugmentedActionContext,
    payload: ChannelRoom
  ): void
  [ChannelActionTypes.LOAD_CHANNELS](
    { commit }: AugmentedActionContext,
  ): Promise<Array<Channel>>
  [ChannelActionTypes.LOAD_CHANNEL_BY_ID](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ChannelActionTypes.INIT_CHANNEL_INFO](
    { commit }: AugmentedActionContext,
    payload: number
  ): void
  [ChannelActionTypes.RESET_CHANNEL_INFO](
    { commit }: AugmentedActionContext,
  ): void
}

export const channelActions: ActionTree<ChannelState, RootState> & ChannelActions = {
  [ChannelActionTypes.SET_CHANNELS] ({ commit }) {
    commit(ChannelMutationTypes.SET_CHANNELS)
  },
  [ChannelActionTypes.SET_CURRENT_CHANNEL] ({ commit }, payload) {
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, payload)
  },
  async [ChannelActionTypes.SET_CURRENT_ROOM] ({ commit }, payload) {
    const responseData = await loadChannelById(payload)
    if (responseData)
      commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, responseData)
  },
  async [ChannelActionTypes.LOAD_CHANNEL_BY_ID] ({ commit }, payload) {
    const responseData = await loadChannelById(payload)
    if (responseData)
      commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, responseData)
  },
  async [ChannelActionTypes.LOAD_CHANNELS] ({ commit }) {
    const responseData = await loadChannels()
    commit(ChannelMutationTypes.SET_CHANNELS, responseData)

    return responseData
  },
  async [ChannelActionTypes.INIT_CHANNEL_INFO] ({ commit }, payload) {
    const responseChannelRoomGroup = await loadChannelRoomGroupByChannelId(payload)
    const groupAndRooms = await Promise.all(responseChannelRoomGroup.map(async (group) => {
      return {
        ...group,
        rooms: await loadChannelRoomsByChannelRoomGroupId(group.id)
      } as ChannelRoomGroupInfo
    }))
    commit(ChannelMutationTypes.SET_GROUPS_AND_ROOMS, groupAndRooms)
  },
  async [ChannelActionTypes.RESET_CHANNEL_INFO] ({ commit }) {
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, {} as Channel)
    commit(ChannelMutationTypes.SET_GROUPS_AND_ROOMS, [])
  },
}