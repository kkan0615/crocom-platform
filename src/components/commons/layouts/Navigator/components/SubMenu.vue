<template>
  <div
    role="menu"
    class="mt-2 space-y-2 px-7"
  >
    <div
      role="menuitem"
      class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TSubMenuNavigator',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
