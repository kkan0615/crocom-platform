<template>
  <div>
    {{ msg }}
    <t-button
      class="mr-1"
      @click="test"
    >
      default
    </t-button>
    <t-button
      @click="test"
      class="mx-1"
      disabled
    >
      disabled
    </t-button>
    <t-button
      :border="border"
      class="mx-1"
      @click="test"
    >
      border
    </t-button>
    <t-button
      class="ml-1"
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
      alert('clicked!')
    }

    return {
      msg,
      border,
      test
    }
  }
})
</script>
