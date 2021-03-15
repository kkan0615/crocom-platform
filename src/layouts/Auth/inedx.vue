<template>
  <router-view />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
