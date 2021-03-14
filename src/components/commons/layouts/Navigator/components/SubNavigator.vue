<template>
  <aside class="flex-shrink-0 hidden w-16 bg-white border-r dark:border-blue-800 dark:bg-darker md:block">
    <div class="flex flex-col h-screen">
      <nav
        class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto h-full text-center"
      >
        <slot />
      </nav>
    </div>
    <!-- Sidebar footer -->
    <div class="flex-shrink-0 px-2 py-4 space-y-2">
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
