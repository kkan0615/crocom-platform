import { ActionContext, ActionTree } from 'vuex'
import { ChannelMutations, ChannelMutationTypes } from './mutations'
import { ChannelState } from './state'
import { RootState } from '@/store'
import { Channel } from '@/types/model/channel/channel'
import { loadChannelById, loadChannels } from '@/dummy/channel/channel'
import { loadChannelRoomGroupByChannelId } from '@/dummy/channel/roomGroup'
import { ChannelRoomGroupInfo } from '@/types/model/channel/roomGroup'
import { loadChannelRoomsByChannelRoomGroupId } from '@/dummy/channel/room'
import { loadChannelMembersByChannelId } from '@/dummy/channel/channelMember'
import { ChannelMemberInfo } from '@/types/model/channel/member'

export enum ChannelActionTypes {
  SET_CHANNELS = 'CHANNEL_SET_CHANNELS',
  SET_CURRENT_CHANNEL = 'CHANNEL_SET_CURRENT_CHANNEL',
  SET_CURRENT_ROOM = 'CHANNEL_SET_CURRENT_ROOM',
  LOAD_CHANNELS = 'CHANNEL_LOAD_CHANNELS',
  LOAD_CHANNEL_BY_ID = 'CHANNEL_LOAD_CHANNEL_BY_ID',
  INIT_CHANNEL_INFO = 'CHANNEL_INIT_CHANNEL_INFO',
  RESET_CHANNEL_INFO = 'CHANNEL_RESET_CHANNEL_INFO',
  LOAD_CURRENT_CHANNEL_MEMBERS = 'CHANNEL_LOAD_CURRENT_CHANNEL_MEMBERS',
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
    payload: Channel
  ): void
  [ChannelActionTypes.SET_CURRENT_ROOM](
    { commit }: AugmentedActionContext,
    payload: number
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
  [ChannelActionTypes.LOAD_CURRENT_CHANNEL_MEMBERS](
    { commit }: AugmentedActionContext,
    payload: number
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
    const channelMembers = (await loadChannelMembersByChannelId(payload)) as Array<ChannelMemberInfo>
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL_MEMBERS, channelMembers)
  },
  async [ChannelActionTypes.RESET_CHANNEL_INFO] ({ commit }) {
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL, {} as Channel)
    commit(ChannelMutationTypes.SET_GROUPS_AND_ROOMS, [])
  },
  async [ChannelActionTypes.LOAD_CURRENT_CHANNEL_MEMBERS] ({ commit }, payload) {
    const responseData = (await loadChannelMembersByChannelId(payload)) as Array<ChannelMemberInfo>
    commit(ChannelMutationTypes.SET_CURRENT_CHANNEL_MEMBERS, responseData)
  },
}
