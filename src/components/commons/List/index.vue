<template>
  <div
    :class="wrapperStyle"
    role="list"
  >
    <div
      role="listitem"
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
        'rounded-t': props.rounded,
        [`hover:bg-${props.color}`]: true,
      }
    })

    const itemStyle = computed(() => {
      return {
        'flex': true,
        'p-2': true,
        'border-transparent': true,
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
