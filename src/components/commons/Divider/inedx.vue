<template>
  <hr
    class="w-full"
    :class="hrClasses"
  >
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export const TDivider = defineComponent({
  name: 'TDivider',
  props: {
    size: {
      type: [Number, String],
      required: false,
      default: 3,
    }
  },
  setup (props) {
    const hrClasses = computed(() => {
      return {
        [`border-${props.size}`] : true
      }
    })

    return {
      hrClasses
    }
  }
})

export default TDivider
</script>
