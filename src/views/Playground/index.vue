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
    <t-default-input
      label="test"
      placeholder="placeholder"
    />
    <t-default-input
      label="left test"
      placeholder="placeholder"
      left
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'
import TDefaultInput from '@/components/commons/inputs/Default/index.vue'

export default defineComponent({
  name: 'Playground',
  components: {
    TButton,
    TDefaultInput,
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
