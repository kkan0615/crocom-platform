<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  setup () {
    const msg = ref('Login File')

    return {
      msg,
    }
  }
})
</script>
