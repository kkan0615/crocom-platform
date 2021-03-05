<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
