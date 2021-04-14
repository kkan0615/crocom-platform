<template>
  <!-- Sidebar -->
  <aside class="flex flex-col h-full flex-shrink-0 bg-navigator text-textPrimary-500 dark:bg-navigator-dark dark:text-textPrimary-dark-500">
    <!-- Sidebar links -->
    <nav
      aria-label="Main"
      class="flex-grow px-2 py-4 space-y-2 overflow-y-auto h-full scrollable w-full"
    >
      <slot />
    </nav>
    <!-- Sidebar footer -->
    <div class="mt-auto px-2 py-4 space-y-2">
      <slot
        name="footer"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TNavigator',
  props: {
    right: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup () {
    const msg = ref('Navigator')

    return {
      msg,
    }
  }
})
</script>
