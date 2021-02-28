<template>
  <button
    :readOnly="readOnly"
    :disabled="disabled"
    :class="styles"
  >
    <!-- Button name(label) will be in this slot -->
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TButton',
  props: {
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
  },
  setup (props) {
    const styles = computed(() => {
      // bg-blue-500 font-bold text-white px-2 py-1 transition duration-300 ease-in-out hover:bg-blue-600
      // return 'focus:outline-none text-white text-sm py-2 px-3 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'

      return {
        'focus:outline-none': true,
        'text-white': !props.border && !props.flat,
        [`text-${props.color}-600`]: props.border || props.flat,
        'text-sm': true,
        'py-2': true,
        'px-3': true,
        'rounded-md': true,
        'rounded-full': props.rounded,
        [`bg-${props.color}-500`]: !props.border && !props.flat && !props.disabled,
        [`bg-${props.color}-300`]: props.disabled,
        [`hover:bg-${props.color}-600`]: !props.border && !props.flat && !props.disabled,
        'hover:shadow-lg': !props.border && !props.flat && !props.disabled,
        'border': props.border && !props.flat,
        [`border-${props.color}-600`]: props.border && !props.flat,
        [`hover:bg-${props.color}-100`]: props.border && !props.flat,
        'w-full': props.block
      }
    })
    return {
      styles,
    }
  }
})
</script>

