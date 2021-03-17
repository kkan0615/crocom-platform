<template>
  <t-app-bar />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TAppBar from '@/components/commons/layouts/Appbar/index.vue'

export default defineComponent({
  name: 'AppBar',
  components: {
    TAppBar
  },
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
