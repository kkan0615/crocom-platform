<template>
  <!-- if it's logged in -->
  <t-dropdown-menu
    v-if="userInfo.id"
  >
    <template
      #activator
    >
      <t-badge
        :size="8"
        :status-size="3"
      >
        <img
          v-if="userInfo.img"
          class="rounded-full"
          alt="A"
          src="https://randomuser.me/api/portraits/men/62.jpg"
        >
        <div
          v-else
          class="text-sm font-medium"
        >
          UR
        </div>
      </t-badge>
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
  </t-dropdown-menu>
  <!-- if it's not logged in -->
  <t-dropdown-menu
    v-else
  >
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
  </t-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import TBadge from '@/components/commons/Badge/index.vue'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import userMixin from '@/mixins/user'

export default defineComponent({
  name: 'AuthMenu',
  components: {
    TDropdownMenu,
    TCard,
    TIcon,
    TBadge,
  },
  setup () {
    const { userInfo } = userMixin()

    return {
      userInfo,
    }
  }
})
</script>
