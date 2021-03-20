<template>
  <header
    class="fixed flex items-center top-0 left-0 w-full h-12 bg-primary"
  >
    <t-icon
      class="ml-2"
    >
      reorder
    </t-icon>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TIcon from '@/components/commons/Icon/index.vue'

export default defineComponent({
  name: 'TAppBar',
  components: {
    TIcon
  },
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
