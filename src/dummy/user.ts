import faker from 'faker'
import { User } from '@/types/model/user/user'
import { generateRandomIntNumber } from '@/utils/random'

const users: Array<User> = []

export const generateRandomUsers = async () => {
  for (let i = 0; i < 100; i++) {
    users.push({
      id: i + 1,
      img: `https://randomuser.me/api/portraits/${generateRandomIntNumber(0, 1) ? 'men' : 'women'}/${i}.jpg`,
      name: faker.name.firstName(),
      nickname: faker.name.middleName()
    })
  }

}
