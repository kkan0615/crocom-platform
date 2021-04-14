import { MutationTree } from 'vuex'
import { ChannelState } from './state'
import { Channel } from '@/types/model/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'
import { ChannelRoomGroupInfo } from '@/types/model/channel/roomGroup'
import { User } from '@/types/model/user/user'
import { ChannelMemberInfo } from '@/types/model/channel/member'

export enum ChannelMutationTypes {
  SET_CHANNELS = 'CHANNEL_SET_CHANNELS',
  SET_CURRENT_CHANNEL = 'CHANNEL_SET_CURRENT_CHANNEL',
  SET_GROUPS_AND_ROOMS = 'CHANNEL_SET_GROUP_AND_ROOMS',
  SET_CURRENT_CHANNEL_ROOM = 'CHANNEL_SET_CURRENT_CHANNEL_ROOM',
  SET_CURRENT_CHANNEL_MEMBERS = 'CHANNEL_SET_CURRENT_CHANNEL_MEMBERS',
}

export type ChannelMutations<S = ChannelState> = {
  [ChannelMutationTypes.SET_CHANNELS](state: S, payload: Array<Channel>): void
  [ChannelMutationTypes.SET_CURRENT_CHANNEL](state: S, payload: Channel): void
  [ChannelMutationTypes.SET_GROUPS_AND_ROOMS](state: S, payload: Array<ChannelRoomGroupInfo>): void
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_ROOM](state: S, payload: ChannelRoom): void
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_MEMBERS](state: S, payload: Array<ChannelMemberInfo>): void

}

export const channelMutations: MutationTree<ChannelState> & ChannelMutations = {
  [ChannelMutationTypes.SET_CHANNELS] (state, payload) {
    state.channels = payload
  },
  [ChannelMutationTypes.SET_CURRENT_CHANNEL] (state, payload) {
    state.currentChannel = payload
  },
  [ChannelMutationTypes.SET_GROUPS_AND_ROOMS] (state, payload) {
    state.groupsAndRooms = payload
  },
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_ROOM] (state, payload) {
    state.currentRoom = payload
  },
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_MEMBERS] (state, payload) {
    console.log(payload)
    state.currentChannelMembers = payload
  },
}
