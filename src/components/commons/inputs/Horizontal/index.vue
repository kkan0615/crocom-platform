<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { v4 } from 'uuid'

export default defineComponent({
  name: 'THorizontalInput',
  props: {
    id: {
      type: String,
      default: v4(),
      required: false
    },
    label: {
      type: String,
      default: '',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: 'text',
      required: false
    },
    left: {
      type: Boolean,
      default: false,
      required: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    color: {
      type: String,
      default: 'blue',
      required: false,
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
    flat: {
      type: Boolean,
      default: false,
      required: false,
    },
    rounded: {
      type: Boolean,
      default: false,
      required: false,
    },
    /* To make full size of block */
    block: {
      type: Boolean,
      default: false,
      required: false,
    },
    shadow: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
