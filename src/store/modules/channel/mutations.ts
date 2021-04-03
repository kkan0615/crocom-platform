import { MutationTree } from 'vuex'
import { ChannelState } from './state'
import { Channel } from '@/types/model/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'

export enum ChannelMutationTypes {
  SET_CHANNELS = 'CHANNEL_SET_CHANNELS',
  SET_CURRENT_CHANNEL = 'CHANNEL_SET_CURRENT_CHANNEL',
  SET_CURRENT_CHANNEL_ROOM = 'CHANNEL_SET_CURRENT_CHANNEL_ROOM'
}

export type ChannelMutations<S = ChannelState> = {
  [ChannelMutationTypes.SET_CHANNELS](state: S, payload: Array<Channel>): void
  [ChannelMutationTypes.SET_CURRENT_CHANNEL](state: S, payload: Channel): void
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_ROOM](state: S, payload: ChannelRoom): void
}

export const channelMutations: MutationTree<ChannelState> & ChannelMutations = {
  [ChannelMutationTypes.SET_CHANNELS] (state, payload) {
    state.channels = payload
  },
  [ChannelMutationTypes.SET_CURRENT_CHANNEL] (state, payload) {
    state.currentChannel = payload
  },
  [ChannelMutationTypes.SET_CURRENT_CHANNEL_ROOM] (state, payload) {
    state.currentRoom = payload
  },
}
