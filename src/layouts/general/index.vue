<template>
  <div
    class="flex h-full"
  >
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
import Navigator from '@/components/commons/layouts/Navigator/index.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    Navigator
  },
  setup () {
    const msg = ref('GeneralLayout File')
    return {
      msg
    }
  }
})
</script>
