<template>
  <t-app-bar
    class="left-0 top-0 absolute"
    style="z-index: 100"
  >
    <t-icon
      class="text-white ml-2"
      @click="changeNavigatorStatus"
    >
      reorder
    </t-icon>
    <!-- end part -->
    <div
      class="ml-auto mr-2"
    >
      <t-flyout-menu>
        <template
          #activator
        >
          <t-icon
            class="text-white"
          >
            person
          </t-icon>
        </template>
        <t-card
          shadow
          width="32"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            your profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Your projects
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Help
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
          >
            Sign Out
          </a>
        </t-card>
      </t-flyout-menu>
    </div>
  </t-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TAppBar from '@/components/commons/layouts/Appbar/index.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TFlyoutMenu from '@/components/commons/menu/Flyout/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'AppBar',
  components: {
    TAppBar,
    TIcon,
    TFlyoutMenu,
    TCard
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)

    const changeNavigatorStatus = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_SUB_NAVIGATOR)
    }

    return {
      changeNavigatorStatus
    }
  }
})
</script>
