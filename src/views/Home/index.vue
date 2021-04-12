<template>
  <div>
    {{ userInfo }}
    <router-link
      :to="{ name: 'Playground' }"
    >
      Playground
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, } from 'vue'
import useStore from '@/store'
import { ChannelActionTypes } from '@/store/modules/channel/actions'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'Home',
  setup () {
    const store = useStore()

    const userInfo = computed(() => store.state.user)

    onMounted(async () => {
      await store.dispatch(ChannelActionTypes.RESET_CHANNEL_INFO)
      await store.dispatch(ApplicationActionTypes.SET_USER_NAVIGATOR, false)
    })

    return {
      userInfo,
    }
  }
})
</script>
