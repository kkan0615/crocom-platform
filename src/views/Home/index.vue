<template>
  <div>
    {{ msg }}
    {{ userInfo }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
// import { useStore } from 'vuex'
import useStore, { key } from '@/store'
import { UserActionTypes } from '@/store/modules/user/actions'

export default defineComponent({
  name: 'Home',
  setup () {
    const msg = ref('Home File')
    const store = useStore()

    const userInfo = computed(() => store.state.user)

    onMounted(async () => {
      console.log(store)
      console.log('state', store.state)
      console.log('state.user', store.state.user)
      console.log('getters', store.getters.isLoggedIn)
      console.log('dispatch', await store.dispatch(UserActionTypes.setUser, { id: 1, name: 'test' }))
      console.log('-00----------------------after-00------------------------')
      console.log('after state', store.state.user)
      console.log('getters', store.getters.isLoggedIn)
    })

    return {
      msg,
      userInfo
    }
  }
})
</script>
