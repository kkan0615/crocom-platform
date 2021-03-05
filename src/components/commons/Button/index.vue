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
      default: 'primary',
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
      return {
        'focus:outline-none': true,
        'text-sm': true,
        'py-2': true,
        'px-3': true,
        'rounded-md': true,
        'opacity-20': props.disabled,
        'text-white': !props.border && !props.flat,
        [`text-${props.color}-accent`]: props.border || props.flat,
        'rounded-full': props.rounded,
        [`bg-${props.color}`]: !props.border && !props.flat,
        [`hover:bg-${props.color}-accent`]: !props.border && !props.flat && !props.disabled,
        'hover:shadow-lg': !props.border && !props.flat && !props.disabled,
        'border': props.border && !props.flat,
        [`border-${props.color}-accent`]: props.border && !props.flat,
        [`hover:bg-${props.color}-blur`]: props.border && !props.flat,
        'w-full': props.block
      }
    })
    return {
      styles,
    }
  }
})
</script>

