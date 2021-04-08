<template>
  <!-- Sidebar -->
  <aside class="flex flex-col h-full items-center w-14 bg-sub-navigator text-textPrimary-500 dark:bg-sub-navigator-dark dark:text-textPrimary-dark-500">
    <!-- Sidebar links -->
    <nav
      aria-label="Main"
      class="flex flex-col py-4 space-y-2 h-full items-center"
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
