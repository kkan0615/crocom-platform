<template>
  <div class="flex-shrink-0 w-10 h-10">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TIconList',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
