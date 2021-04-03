import { Channel } from '@/types/model/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'

export interface ChannelState {
  channels: Array<Channel>
  currentChannel: Channel
  currentRoom: ChannelRoom
}

/**
 * navigator
 */
export const channelState: ChannelState = {
  channels: [],
  currentChannel: {} as Channel,
  currentRoom: {} as ChannelRoom,
}
