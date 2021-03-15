<template>
  <div
    class="flex h-full"
  >
    <sub-navigator />
    <navigator />
    <div class="h-full p-4">
      <main class="space-y-4">
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

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    Navigator,
    SubNavigator,
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
