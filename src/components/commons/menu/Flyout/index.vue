<template>
  <div
    class="inline-block flex"
    @mouseover="isVisible = true"
    @mouseleave="isVisible = false"
    @keydown.enter="isVisible = !isVisible"
  >
    <div
      class="relative"
    >
      <slot
        name="activator"
      />
    </div>
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
        class="absolute left-16 z-20 py-1 bg-white border border-gray-200 rounded-md shadow-xl"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'TFlyoutMenu',
  props: {
    top: {
      type: Boolean,
      required: false,
      default: false,
    },
    right: {
      type: Boolean,
      required: false,
      default: false,
    },
    bottom: {
      type: Boolean,
      required: false,
      default: true,
    },
    left: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  setup () {
    const isVisible = ref(false)

    return {
      isVisible,
    }
  }
})
</script>
<style>
  .test {
    position: relative-to first-sibling(#t-flyout-menu)
  }
</style>
