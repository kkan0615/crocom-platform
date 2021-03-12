<template>
  <div :class="wrapperStyle">
    <div
      :class="itemStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TList',
  props: {
    color: {
      type: String,
      default: 'primary',
      required: false,
    },
    rounded: {
      type: Boolean,
      default: true,
      required: false,
    },
    border: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup (props) {
    const wrapperStyle = computed(() => {
      return {
        'cursor-pointer': true,
        'w-full': true,
        'rounded-t': props.rounded,
        [`hover:bg-${props.color}`]: true,
        'border-b': props.border,
        [`border-${props.color}`]: props.border,

      }
    })

    const itemStyle = computed(() => {
      return {
        'flex': true,
        'items-center': true,
        'w-full': true,
        'p-2': true,
        'pl-2': true,
        'border-transparent': true,
        'relative': true,
        'border-l-2': props.border,
        [`hover:border-${props.color}`]: props.border,
      }
    })

    return {
      wrapperStyle,
      itemStyle,
    }
  }
})
</script>
