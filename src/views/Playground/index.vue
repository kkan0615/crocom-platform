<template>
  <div>
    {{ msg }}
    <t-button
      @click="test"
    >
      default
    </t-button>
    <t-button
      :border="border"
      class="mx-2"
      @click="test"
    >
      border
    </t-button>
    <t-button
      flat
      @click="test"
    >
      flat
    </t-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'

export default defineComponent({
  name: 'Playground',
  components: {
    TButton
  },
  setup () {
    const msg = ref('Playground File')
    const border = ref(true)
    const test = () => {
      console.log('test')
      border.value = !border.value
    }

    return {
      msg,
      border,
      test
    }
  }
})
</script>
