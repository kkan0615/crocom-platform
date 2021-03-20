<template>
  <div
    class="flex w-full h-full"
  >
    <navigator />
    <div
      class="w-full"
    >
      <app-bar />
      <main class="h-full p-4 space-y-4">
        {{ msg }}
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Navigator from '@/layouts/general/components/Navigator.vue'
import AppBar from '@/layouts/general/components/Appbar.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    Navigator,
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
