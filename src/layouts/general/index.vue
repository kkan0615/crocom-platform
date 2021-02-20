<template>
  {{ msg }}
  <router-view />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'GeneralLayout',
  setup () {
    const msg = ref('GeneralLayout File')
    return {
      msg
    }
  }
})
</script>
