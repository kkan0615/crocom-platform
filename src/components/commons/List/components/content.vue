<template>
  <div class="mx-2 -mt-1">
    <slot />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TContentList',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
