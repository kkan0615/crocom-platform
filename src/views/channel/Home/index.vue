<template>
  <div>
    {{ currentChannel }}
    <br>
    {{ channelGroupsAndRooms }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import { ChannelActionTypes } from '@/store/modules/channel/actions'
import useStore from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'ChannelHome',
  setup () {
    const store = useStore()
    const channelGroupsAndRooms = computed(() => store.state.channel.groupsAndRooms)
    const currentChannel = computed(() => store.state.channel.currentChannel)
    const route = useRoute()
    const { channelId } = route.params

    onMounted(async () => {
      if (store.state.channel.currentChannel.id !== Number(channelId))
        await store.dispatch(ChannelActionTypes.SET_CURRENT_ROOM, Number(channelId))

      await store.dispatch(ChannelActionTypes.INIT_CHANNEL_INFO, Number(channelId))
    })

    return {
      currentChannel,
      channelGroupsAndRooms,
    }
  }
})
</script>
