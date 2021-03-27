<template>
  <t-sub-navigator
    v-if="subNavigatorVisible"
    class="pa-2"
  >
    <!-- @TODO, Change to loop and get from store -->
    <team-menu
      :team="{
        id: 2,
        img: 'https://picsum.photos/200/300',
        title: 'start road'
      }"
    />
    <team-menu
      :team="{
        id: 3,

        img: 'https://picsum.photos/200/300',
        title: 'start road'
      }"
    />
    <add-team />
    <template
      #footer
    >
      <t-dropdown-menu
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
      </t-dropdown-menu>
    </template>
  </t-sub-navigator>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import TeamMenu from '@/layouts/general/components/TeamMenu.vue'
import AddTeam from '@/layouts/general/components/AddTeam.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TDropdownMenu,
    TCard,
    TeamMenu,
    AddTeam
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
