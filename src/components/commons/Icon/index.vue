<template>
  <i
    class="material-icons"
    :class="iconStyle"
    style="cursor: pointer"
  >
    <slot />
  </i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export const TIcon = defineComponent({
  name: 'TIcon',
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    size: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup (props) {
    const iconStyle = computed(() => {
      return {
        [`md-${props.size}`]: props.size
      }
    })

    return {
      iconStyle,
    }
  }
})

export default TIcon
</script>
