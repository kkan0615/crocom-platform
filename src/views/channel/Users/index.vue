<template>
  <div
    class="h-full scrollable"
  >
    {{ members }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/store'

export default defineComponent({
  name: 'UsersChannel',
  setup () {
    const store = useStore()
    const members = computed(() => store.state.channel.currentChannelMembers)

    return {
      members,
    }
  }
})
</script>
