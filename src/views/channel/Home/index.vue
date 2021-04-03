<template>
  <div>
    hello
    {{ channelGroupsAndRooms }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onMounted } from 'vue'
import { ChannelActionTypes } from '@/store/modules/channel/actions'
import useStore from '@/store'

export default defineComponent({
  name: 'ChannelHome',
  setup () {
    const store = useStore()
    const channelGroupsAndRooms = computed(() => store.state.channel.groupsAndRooms)

    onMounted(() => {
      console.log('hi')
      store.dispatch(ChannelActionTypes.INIT_CHANNEL_INFO)
    })

    return {
      channelGroupsAndRooms,
    }
  }
})
</script>
