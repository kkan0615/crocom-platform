<template>
  <div
    class="w-16 h-16 cursor-pointer"
  >
    <div
      class="w-full h-full rounded-lg flex justify-center items-center bg-gray-500 text-white hover:opacity-50"
    >
      <t-icon
        class="text-4xl"
      >
        add
      </t-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TIcon from '@/components/commons/Icon/index.vue'

export default defineComponent({
  name: 'Home',
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
