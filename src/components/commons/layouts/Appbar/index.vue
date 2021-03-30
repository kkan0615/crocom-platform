<template>
  <header
    class="flex items-center top-0 w-full h-12 bg-primary"
    :class="wrapperClasses"
  >
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TAppBar',
  props: {
    fixed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup (props) {
    const wrapperClasses = computed(() => {
      return {
        fixed: props.fixed
      }
    })

    return {
      wrapperClasses,
    }
  }
})
</script>
