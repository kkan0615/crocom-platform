<template>
  <t-flyout-menu
    right
  >
    <template
      #activator
    >
      <div
        class="hover:bg-blue-600"
      >
        <div
          class="border-2 w-14 h-14 rounded-lg cursor-pointer"
        >
          <img
            class="h-full w-full"
            :src="team.img"
            :alt="team.title"
          >
        </div>
      </div>
    </template>
    <t-card
      width="14"
    >
      {{ team.title }}
    </t-card>
  </t-flyout-menu>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { TeamGroup } from '@/types/model/team/teamGroup'
import TFlyoutMenu from '@/components/commons/menu/Flyout/index.vue'
import TCard from '@/components/commons/Card/index.vue'

export default defineComponent({
  name: 'TeamMenu',
  components: {
    TFlyoutMenu,
    TCard,
  },
  props: {
    team: {
      type: Object as TeamGroup,
      required: false,
      default: () => {
        return {} as TeamGroup
      }
    }
  },
  setup (props) {
    const msg = ref('temp')
    return {
      msg
    }
  }
})
</script>
