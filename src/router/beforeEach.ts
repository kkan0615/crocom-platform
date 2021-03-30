import router from '@/router'
import { store } from '@/store'
import { UserActionTypes } from '@/store/modules/user/actions'

router.beforeEach(async (to, from, next) => {
  /* Update user */
  // @TODO: 나중에 IF문 걸어서 로그인유저인지 확인하고 하기 !
  await store.dispatch(`user/${UserActionTypes.UPDATE_USER}`)
  next()
})
