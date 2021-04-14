<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'ChatChannel',
  setup () {
    const msg = ref('Chat Channel')

    return {
      msg,
    }
  }
})
</script>
