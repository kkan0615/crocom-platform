<template>
  <div>
    hello
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
    const route = useRoute()
    const { channelId } = route.params

    onMounted(() => {
      store.dispatch(ChannelActionTypes.INIT_CHANNEL_INFO, Number(channelId))
    })

    return {
      channelGroupsAndRooms,
    }
  }
})
</script>
