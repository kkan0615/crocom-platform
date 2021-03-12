<template>
  <div
    class="flex h-full"
  >
    <t-sub-navigator>
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
    </t-sub-navigator>
    <navigator>
      <t-menu-group
        :open="open"
      >
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
          @click="open = !open"
        >
          <span>Customize</span>
        </t-button>
      </template>
    </navigator>
    <div class="h-full p-4">
      <main class="space-y-4">
        {{ msg }}
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Navigator from '@/components/commons/layouts/Navigator/index.vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import TButton from '@/components/commons/Button/index.vue'
import TMenuGroup from '@/components/commons/layouts/Navigator/components/MenuGroup.vue'
import TSubMenu from '@/components/commons/layouts/Navigator/components/SubMenu.vue'

export default defineComponent({
  name: 'GeneralLayout',
  components: {
    Navigator,
    TButton,
    TMenuGroup,
    TSubMenu,
    TSubNavigator
  },
  setup () {
    const msg = ref('GeneralLayout File')
    const open = ref(false)

    return {
      msg,
      open
    }
  }
})
</script>
