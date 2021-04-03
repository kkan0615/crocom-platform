import { Channel } from '@/types/model/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'
import { ChannelRoomGroupInfo } from '@/types/model/channel/roomGroup'

export interface ChannelState {
  channels: Array<Channel>
  currentChannel: Channel
  groupsAndRooms: Array<ChannelRoomGroupInfo>
  currentRoom: ChannelRoom
}

/**
 * navigator
 */
export const channelState: ChannelState = {
  channels: [],
  currentChannel: {} as Channel,
  groupsAndRooms: [],
  currentRoom: {} as ChannelRoom,
}
