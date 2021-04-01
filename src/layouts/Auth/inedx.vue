<template>
  <router-view
    :key="$route.path"
  />
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
