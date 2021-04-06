import faker from 'faker'
import { User } from '@/types/model/user/user'
import { generateRandomIntNumber } from '@/utils/random'

export const dummyUsers: Array<User> = []

export const generateRandomUsers = async () => {
  for (let i = 0; i < 100; i++) {
    dummyUsers.push({
      id: i + 1,
      img: `https://randomuser.me/api/portraits/${generateRandomIntNumber(0, 1) ? 'men' : 'women'}/${i}.jpg`,
      name: faker.name.findName(),
      nickname: faker.name.findName(),
      description: faker.lorem.lines(),
    })
  }
}

export const loadUserById = async (id: number) => {
  return dummyUsers.find(user => user.id === id)
}
