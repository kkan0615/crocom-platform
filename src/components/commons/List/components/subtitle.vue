<template>
  <div class="text-xs truncate w-full normal-case font-normal -mt-1">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TSubtitleList',
  // setup () {
  //   const msg = ref('Home File')
  //
  //   return {
  //     msg,
  //   }
  // }
})
</script>
