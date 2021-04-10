import { Channel } from '@/types/model/channel/channel'

export const dummyChannels: Array<Channel> = [
  {
    id: 1,
    img: 'https://newsimg.sedaily.com/2020/04/04/1Z1CEHIPLZ_4.jpg',
    title: 'Animal Crossing',
  },
  {
    id: 2,
    img: 'https://octodex.github.com/images/kimonotocat.png',
    title: 'Samurai Channel',
  },
  {
    id: 3,
    img: 'https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg',
    title: 'Super Mario~'
  }
]

export const loadChannels = async () => {
  return dummyChannels
}

export const loadChannelById = async (channelId: number) => {
  return dummyChannels.find(channel => channel.id === channelId)
}
