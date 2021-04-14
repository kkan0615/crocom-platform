<template>
  <div
    class="flex truncate"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TTitleList',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
