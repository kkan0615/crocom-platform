<template>
  <div
    class="relative"
    role="menu"
    @mouseover="isVisible = true"
    @mouseleave="isVisible = false"
    @keydown.enter="isVisible = !isVisible"
    @click="isVisible = true"
  >
    <slot
      name="activator"
    />
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="-translate-y-3 scale-95 opacity-0"
      enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div
        v-show="isVisible"
        class="absolute mt-2 rounded-md shadow-lg"
        :class="contentClasses"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'TFlyoutMenu',
  props: {
    right: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup (props) {
    const isVisible = ref(false)

    const contentClasses = computed(() => {
      return {
        'right-0': props.right,
      }
    })

    return {
      isVisible,
      contentClasses
    }
  }
})
</script>
