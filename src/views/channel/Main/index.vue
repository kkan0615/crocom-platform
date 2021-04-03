<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
import { loadChannelRoomGroupByChannelId } from '@/dummy/channel/roomGroup'
import { ChannelActionTypes } from '@/store/modules/channel/actions'

export default defineComponent({
  name: 'ChannelMain',
  setup () {
    const store = useStore()

    const route = useRoute()
    const { id } = route.params

    onMounted(async () => {
      if (Number(id)) {
        const responseData = (await loadChannelRoomGroupByChannelId(Number(id)))
        await store.dispatch(ChannelActionTypes.SET_CURRENT_ROOM, responseData)
      }
    })

    const msg = ref('Channel Main')

    return {
      msg,
    }
  }
})
</script>
