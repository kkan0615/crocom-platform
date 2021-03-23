<template>
  <!-- Sidebar -->
  <aside class="flex flex-col h-full items-center w-16 bg-white border-r dark:border-blue-800 dark:bg-darker">
    <!-- Sidebar links -->
    <nav
      aria-label="Main"
      class="flex-1 py-4 space-y-2 h-full"
    >
      <slot />
    </nav>
    <!-- Sidebar footer -->
    <div class="mt-auto">
      <slot
        name="footer"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TSubNavigator',
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
