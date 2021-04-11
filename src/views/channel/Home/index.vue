<template>
  <div>
    {{ currentChannel }}
    <br>
    {{ channelGroupsAndRooms }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useStore from '@/store'

export default defineComponent({
  name: 'ChannelHome',
  setup () {
    const store = useStore()
    const channelGroupsAndRooms = computed(() => store.state.channel.groupsAndRooms)
    const currentChannel = computed(() => store.state.channel.currentChannel)

    return {
      currentChannel,
      channelGroupsAndRooms,
    }
  }
})
</script>
