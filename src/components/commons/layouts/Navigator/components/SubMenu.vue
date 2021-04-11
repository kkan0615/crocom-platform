<template>
  <div
    role="menu"
    class="mt-2"
  >
    <div
      role="menuitem"
      class="block text-sm text-textPrimary-dark-500 transition-colors duration-200 rounded-md dark:hover:text-textPrimary-dark-500 hover:text-gray-700 flex items-center cursor-pointer p-1"
      :class="menuItemClasses"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TSubMenuNavigator',
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  setup (props) {
    const menuItemClasses = computed(() => {
      return {
        [`hover:bg-${props.color}-300`]: true,
        [`dark:hover:bg-${props.color}`]: true,
      }
    })

    return {
      menuItemClasses,
    }
  }
})
</script>
