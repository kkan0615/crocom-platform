import { computed } from 'vue'
import useStore from '@/store'

export const userMixin = () => {
  const store = useStore()

  const userInfo = computed(() => store.state.user)

  return {
    userInfo
  }
}

export default userMixin
