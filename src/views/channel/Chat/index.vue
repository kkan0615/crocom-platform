<template>
  <div
    class="h-full flex flex-col"
  >
    <div
      class="flex-auto"
    >
      top
    </div>
    <div
      class="h-32"
    >
      <rich-editor />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import RichEditor from '@/components/input/RichEditor/index.vue'

export default defineComponent({
  name: 'ChatChannel',
  components: {
    RichEditor
  },
  setup () {
    const msg = ref('Chat Channel')

    return {
      msg,
    }
  }
})
</script>
