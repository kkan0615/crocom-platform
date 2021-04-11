<!-- @TODO: 테스트 -->
<template>
  <router-view
    :key="$route.path"
  />
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { useRoute } from 'vue-router'
import { ChannelActionTypes } from '@/store/modules/channel/actions'

export default defineComponent({
  name: 'Channel',
  setup () {
    const store = useStore()
    const route = useRoute()
    const { channelId } = route.params

    onMounted(async () => {
      if (store.state.channel.currentChannel.id !== Number(channelId)) {
        await store.dispatch(ChannelActionTypes.SET_CURRENT_ROOM, Number(channelId))
        await store.dispatch(ChannelActionTypes.INIT_CHANNEL_INFO, Number(channelId))
        await store.dispatch(ApplicationActionTypes.SET_USER_NAVIGATOR, true)
      }
    })
  }
})
</script>
