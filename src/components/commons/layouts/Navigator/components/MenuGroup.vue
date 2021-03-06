<template>
  <div
    class="flex items-center p-1 text-textPrimary-dark-500 transition-colors rounded-md dark:text-textPrimary-dark-500 cursor-pointer hover:text-white"
    :class="wrapperStyle"
    role="menu"
    @click="handleMenuGroup"
  >
    <slot
      name="icon"
    />
    <span class="text-sm">
      <slot
        name="label"
      />
    </span>
    <span
      class="ml-auto"
    >
      <!-- active class 'rotate-180' -->
      <svg
        class="w-4 h-4 transition-transform transform"
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>
  </div>
  <slot
    v-if="isOpen"
    role="menuitem"
  />
</template>

<script lang="ts">
import { ref, defineComponent, watch, computed } from 'vue'

export default defineComponent({
  name: 'TMenuGroup',
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  emits: [
    'update:open'
  ],
  setup (props, context) {
    const isOpen = ref(props.open)
    watch(() => props.open, (newValue: boolean) => {
      isOpen.value = newValue
    })

    const handleMenuGroup = () => {
      isOpen.value = !isOpen.value
      context.emit('update:open', isOpen)
    }

    const wrapperStyle = computed(() => {
      return {
        [`hover:bg-${props.color}-300`]: true,
        [`dark:hover:bg-${props.color}`]: true,
      }
    })

    return {
      isOpen,
      handleMenuGroup,
      wrapperStyle
    }
  }
})
</script>
