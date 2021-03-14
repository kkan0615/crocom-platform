<template>
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
    <t-icon
      class="text-5xl"
    >
      face
    </t-icon>
    <t-flyout-menu>
      <template
        #activator
      >
        <t-icon
          class="text-5xl"
        >
          east
        </t-icon>
      </template>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #1</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #2</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #3</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #4</a>
    </t-flyout-menu>
    <t-flyout-menu>
      <template
        #activator
      >
        <t-icon
          class="text-5xl"
        >
          south
        </t-icon>
      </template>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #1</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #2</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #3</a>
      <a
        href="#"
        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
      >Submenu Link #4</a>
    </t-flyout-menu>
    <template
      #footer
    >
      <t-flyout-menu>
        <t-icon
          class="text-5xl"
        >
          auth
        </t-icon>
      </t-flyout-menu>
    </template>
  </t-sub-navigator>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TFlyoutMenu from '@/components/commons/menu/Flyout/index.vue'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TFlyoutMenu
  },
  setup () {
    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
