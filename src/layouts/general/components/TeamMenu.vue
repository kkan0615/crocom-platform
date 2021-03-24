<template>
  <t-flyout-menu
    right
  >
    <template
      #activator
    >
      <div
        class="w-14 h-14 cursor-pointer"
      >
        <img
          class="h-full w-full rounded-full"
          :src="teamProp.img"
          :alt="teamProp.title"
        >
      </div>
    </template>
    <t-card
      width="14"
    >
      {{ teamProp.title }}
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
      type: Object,
      required: false,
      default: () => {
        return {} as TeamGroup
      }
    }
  },
  setup (props) {
    const msg = ref('temp')
    return {
      teamProp: props.team as TeamGroup
    }
  }
})
</script>
