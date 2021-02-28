<template>
  <div>
    {{ msg }}
    {{ userInfo }}
    <router-link
      :to="{ name: 'Playground' }"
    >
      Playground
    </router-link>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, inject } from 'vue'
// import { useStore } from 'vuex'
import useStore, { key } from '@/store'
import { useRouter } from 'vue-router'
// import { UserActionTypes } from '@/store/modules/user/actions'

export default defineComponent({
  name: 'Home',
  setup () {
    const msg = ref('Home File')
    const store = useStore()

    const userInfo = computed(() => store.state.user)

    onMounted(async () => {
      // console.log(store)
      // console.log('state', store.state)
      // console.log('state.user', store.state.user)
      // console.log('getters', store.getters.isLoggedIn)
      // console.log('dispatch', await store.dispatch(UserActionTypes.setUser, { id: 1, name: 'test' }))
      // console.log('-00----------------------after-00------------------------')
      // console.log('after state', store.state.user)
      // console.log('getters', store.getters.isLoggedIn)
      // console.log(dialog.confirm('test'))
    })

    return {
      msg,
      userInfo,
    }
  }
})
</script>
