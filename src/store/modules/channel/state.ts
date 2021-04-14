import { Channel } from '@/types/model/channel/channel'
import { ChannelRoom } from '@/types/model/channel/room'
import { ChannelRoomGroupInfo } from '@/types/model/channel/roomGroup'
import { ChannelMemberInfo } from '@/types/model/channel/member'

export interface ChannelState {
  channels: Array<Channel>
  currentChannel: Channel
  groupsAndRooms: Array<ChannelRoomGroupInfo>
  currentRoom: ChannelRoom
  currentChannelMembers: Array<ChannelMemberInfo>
}

/**
 * navigator
 */
export const channelState: ChannelState = {
  channels: [],
  currentChannel: {} as Channel,
  groupsAndRooms: [],
  currentRoom: {} as ChannelRoom,
  currentChannelMembers: [],
}
