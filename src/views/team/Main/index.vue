<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TeamMain',
  setup () {
    const msg = ref('Team Main')

    return {
      msg,
    }
  }
})
</script>
