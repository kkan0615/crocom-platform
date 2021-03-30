<template>
  <t-dropdown-menu
    right
  >
    <template
      #activator
    >
      <div
        class="w-16 h-16 cursor-pointer  border-l-4 border-red-300"
      >
        <div
          class="w-full h-full rounded-lg flex justify-center items-center"
        >
          <!-- @TODO: Component로 변경하기 -->
          <img
            class="w-14 h-14 rounded-lg bg-gray-500"
            :class="{ 'animate-pulse': !imageLoaded }"
            :src="teamProp.img"
            :alt="teamProp.title"
            @load="imageLoaded = true"
          >
        </div>
      </div>
    </template>
    <t-card
      width="14"
    >
      {{ teamProp.title }}
    </t-card>
  </t-dropdown-menu>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { Team } from '@/types/model/team/team'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'

export default defineComponent({
  name: 'TeamMenu',
  components: {
    TDropdownMenu,
    TCard,
  },
  props: {
    team: {
      type: Object,
      required: false,
      default: () => {
        return {} as Team
      }
    }
  },
  setup (props) {
    const imageLoaded = ref(false)

    return {
      imageLoaded,
      teamProp: props.team as Team
    }
  }
})
</script>
