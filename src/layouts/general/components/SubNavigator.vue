<template>
  <t-sub-navigator
    v-if="subNavigatorVisible"
    class="pa-2"
  >
    <t-icon
      class="text-5xl"
    >
      face
    </t-icon>
    <t-flyout-menu
      right
    >
      <template
        #activator
      >
        <t-icon
          class="text-5xl"
        >
          person
        </t-icon>
      </template>
      <t-card>
        test
      </t-card>
    </t-flyout-menu>
    <!-- @TODO, Change to loop and get from store -->
    <team-menu
      :team="{
        id: 2,
        img: 'https://picsum.photos/200/300',
        title: 'start road'
      }"
    />
    <template
      #footer
    >
      <t-flyout-menu
        right
      >
        <template
          #activator
        >
          <t-icon
            class="text-5xl"
          >
            person
          </t-icon>
        </template>
        <t-card>
          test
        </t-card>
      </t-flyout-menu>
    </template>
  </t-sub-navigator>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import TeamMenu from '@/layouts/general/components/TeamMenu.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TFlyoutMenu from '@/components/commons/menu/Flyout/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TFlyoutMenu,
    TCard,
    TeamMenu
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
