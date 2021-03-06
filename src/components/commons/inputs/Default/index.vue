<template>
  <div
    :class="wrapperStyle"
  >
    <div
      v-if="preAppend"
      :class="preAppendStyle"
    >
      <slot
        name="preAppend"
      />
    </div>
    <slot
      name="input"
    >
      <input
        :id="id"
        :type="type"
        :class="inputStyle"
        :placeholder="placeholder"
        :readonly="readOnly"
        :disabled="disabled"
      >
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import inputMixin from '@/mixins/input'
import inputProps from '@/components/commons/Inputs/Default/types'

export default defineComponent({
  name: 'TDefaultInput',
  mixins: [
    inputMixin
  ],
  props: {
    ...inputProps
  },
  setup (props) {
    const inputStyle = computed(() => {
      return {
        'default-input': true,
        'rounded-sm': true,
        'px-4': true,
        'py-2': props.dense,
        'py-3': !props.dense,
        'bg-gray-100': true,
        'flex-1': props.preAppend,
        'w-full': !props.preAppend && props.block,
        'focus:outline-none': props.focus,
        'focus:ring-2': props.focus,
        [`focus:ring-${props.color}`]: props.focus && props.color,
        'focus:border-transparent': props.focus,
        'ring-2':props.border,
        [`ring-${props.color}`]: props.border && props.color,
      }
    })

    const wrapperStyle = computed(() => {
      return {
        'my-1': true,
        'text-sm': props.dense,
        'text-base': !props.dense,
        'flex': props.preAppend,
        'w-full': !props.preAppend,
        'shadow-md': props.shadow,
        [`text-${props.color}`]: props.color,
      }
    })

    const preAppendStyle = computed(() => {
      return {
        'text-sm': true,
        'rounded-l': true,
        'px-4': true,
        'py-2': true,
        'bg-gray-300': true,
        'whitespace-no-wrap': true,
      }
    })

    return {
      wrapperStyle,
      preAppendStyle,
      inputStyle,
    }
  }
})
</script>

