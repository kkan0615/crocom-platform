<template>
  <div
    class="flex h-full"
  >
    <app-bar />
    <div
      class="pt-12 flex"
    >
      <sub-navigator />
      <navigator />
      <main class="h-full p-4 space-y-4">
        {{ msg }}
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import SubNavigator from '@/layouts/general/components/SubNavigator.vue'
import Navigator from '@/layouts/general/components/Navigator.vue'
import AppBar from '@/layouts/general/components/Appbar.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    Navigator,
    SubNavigator,
    AppBar
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
