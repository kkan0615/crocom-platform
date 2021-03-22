<template>
  <t-sub-navigator
    v-if="subNavigatorVisible"
  >
    <span
      class="justify-center"
    >
      <svg
        class="w-12 text-center"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </span>
    <t-icon
      class="text-5xl"
    >
      face
    </t-icon>
    <template
      #footer
    >
      <t-flyout-menu>
        <template
          #activator
        >
          <t-icon
            class="text-5xl"
          >
            auth
          </t-icon>
        </template>
        test
      </t-flyout-menu>
    </template>
  </t-sub-navigator>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TFlyoutMenu from '@/components/commons/menu/Flyout/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TFlyoutMenu
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)
    const subNavigatorVisible = computed(() => application.value.subNavigator)

    return {
      subNavigatorVisible,
    }
  }
})
</script>
