<template>
  <div
    :class="wrapperClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TCard',
  props: {
    width: {
      type: [String, Number],
      required: false,
      default: 'full'
    },
    shadow: {
      type: Boolean,
      required: false,
      default: true
    },
    shadowType: {
      type: String,
      required: false,
      default: 'lg'
    },
  },
  setup (props) {
    const wrapperClasses = computed(() => {
      return {
        [`w-${props.width}`]: true,
        [`shadow-${props.shadowType}`]: props.shadow,
      }
    })

    return {
      wrapperClasses,
    }
  }
})
</script>
