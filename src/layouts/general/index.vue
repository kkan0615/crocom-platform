<template>
  <div
    class="h-full"
  >
    <app-bar />
    <div
      class="pt-12 h-full"
    >
      <div
        class="flex h-full"
      >
        <sub-navigator />
        <navigator
          class="w-56"
        />
        <main class="p-4 space-y-4 bg-main text-textPrimary-500 dark:bg-main-dark dark:dark:text-textPrimary-dark-500">
          {{ msg }}
          <router-view
            :key="$route.path"
          />
        </main>
        <user-navigator
          class="w-60"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import SubNavigator from '@/layouts/general/components/SubNavigator.vue'
import Navigator from '@/layouts/general/components/Navigator.vue'
import UserNavigator from '@/layouts/general/components/UserNavigator.vue'
import AppBar from '@/layouts/general/components/Appbar.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    SubNavigator,
    Navigator,
    UserNavigator,
    AppBar,
  },
  setup () {
    const msg = ref('GeneralLayout File')
    const open = ref(false)

    return {
      msg,
      open
    }
  }
})
</script>
