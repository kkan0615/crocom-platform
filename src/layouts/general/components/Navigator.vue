<template>
  <t-navigator
    v-if="navigatorVisible"
  >
    <div
      class="flex"
    >
      <div
        class="flex-auto"
      >
        test
      </div>
      <div
        class="flex-shrink-0 justify-end"
        @click="changeNavigatorStatus"
      >
        <t-icon>
          first_page
        </t-icon>
      </div>
    </div>
    <t-menu-group>
      <template
        #icon
      >
        <svg
          class="w-5 h-5"
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
      </template>
      <template
        #label
      >
        Test label
      </template>
      <t-sub-menu>
        Test
      </t-sub-menu>
    </t-menu-group>
    <template
      #footer
    >
      <t-button
        block
      >
        <span>Customize</span>
      </t-button>
    </template>
  </t-navigator>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TNavigator from '@/components/commons/layouts/Navigator/index.vue'
import TButton from '@/components/commons/Button/index.vue'
import TMenuGroup from '@/components/commons/layouts/Navigator/components/MenuGroup.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TSubMenu from '@/components/commons/layouts/Navigator/components/SubMenu.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'Navigator',
  components: {
    TNavigator,
    TButton,
    TMenuGroup,
    TIcon,
    TSubMenu,
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)
    const navigatorVisible = computed(() => application.value.navigator)

    const changeNavigatorStatus = async () => {
      console.log(application.value.navigator)
      await store.dispatch(ApplicationActionTypes.CHANGE_NAVIGATOR)
    }

    return {
      navigatorVisible,
      changeNavigatorStatus
    }
  }
})
</script>
