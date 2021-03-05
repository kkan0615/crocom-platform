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
        'focus:outline-none': true,
        'bg-gray-100': true,
        'flex-1': props.preAppend,
        'w-full': !props.preAppend,
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
      }
    })

    const preAppendStyle = computed(() => {
      return {
        'text-sm': true,
        'border': true,
        'border-2': true,
        'rounded-l': true,
        'px-4': true,
        'py-2': true,
        'mt-3': true,
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

