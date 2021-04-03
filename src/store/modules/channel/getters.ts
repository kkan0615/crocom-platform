import { GetterTree } from 'vuex'
import { ChannelState } from './state'
import { RootState } from '@/store'
import { Channel } from '@/types/model/channel/channel'

export type ChannelGetters<S = ChannelState> = {
  currentChannel(state: S): Channel
}

export const channelGetters: GetterTree<ChannelState, RootState> & ChannelGetters = {
  currentChannel: (state) => {
    return state.channels[0]
  },
}
