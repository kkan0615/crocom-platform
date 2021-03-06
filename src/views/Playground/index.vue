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
      class="mx-1"
      disabled
      @click="test"
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
    <t-horizontal-input
      label="Horizontal Input"
      placeholder="placeholder"
    />
    <t-label-input
      label="Label input"
      placeholder="placeholder"
    />
    <t-label-input
      color="primary"
      label="Dense Label input"
      dense
      placeholder="placeholder"
    />
    <t-label-input
      color="primary"
      label="Dense Label input with pre-append"
      dense
      placeholder="placeholder"
      pre-append
    >
      <template
        #preAppend
      >
        temp
      </template>
    </t-label-input>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'
import THorizontalInput from '@/components/commons/inputs/Horizontal/index.vue'
import TLabelInput from '@/components/commons/inputs/Label/index.vue'

export default defineComponent({
  name: 'Playground',
  components: {
    TButton,
    THorizontalInput,
    TLabelInput,
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
