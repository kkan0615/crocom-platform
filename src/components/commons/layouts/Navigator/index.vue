<template>
  <!-- Sidebar -->
  <aside class="flex flex-col h-full flex-shrink-0 w-56 bg-white border-r dark:border-blue-800 dark:bg-darker">
    <!-- Sidebar links -->
    <nav
      aria-label="Main"
      class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto h-full overflow-y-auto"
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
  setup () {
    const msg = ref('Navigator')

    return {
      msg,
    }
  }
})
</script>
