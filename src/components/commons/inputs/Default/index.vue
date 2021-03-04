<template>
  <div :class="wrapperStyles">
    <slot
      name="label"
      v-bind="{ label, labelStyles }"
    >
      <label
        :for="id"
        :class="labelStyles"
      >
        {{ label }}
      </label>
    </slot>
    <slot
      name="input"
      v-bind="{ inputStyles }"
    >
      <input
        :id="id"
        :type="type"
        :class="inputStyles"
        :placeholder="placeholder"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { v4 } from 'uuid'

export default defineComponent({
  name: 'TDefaultInput',
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
  setup (props) {
    const inputStyles = computed(() => {
      return {
        'rounded-sm': true,
        'px-4': true,
        'py-2': true,
        'mt-3': true,
        'focus:outline-none': true,
        'bg-gray-100': true,
        'flex-1': true,
      }
    })

    const wrapperStyles = computed(() => {
      return {
        'my-5': true,
        'text-sm': true,
        'shadow-md': props.shadow,
        'flex': props.left,
        'w-full': true,
      }
    })

    const labelStyles = computed(() => {
      return {
        'text-sm': props.left,
        'border': props.left,
        'border-2': props.left,
        'rounded-l': props.left,
        'px-4': props.left,
        'py-2': props.left,
        'mt-3': props.left,
        'bg-gray-300': props.left,
        'whitespace-no-wrap': props.left,
        'block': !props.left,
        'text-black': !props.left,
      }
    })

    return {
      inputStyles,
      labelStyles,
      wrapperStyles,
    }
  }
})
</script>

