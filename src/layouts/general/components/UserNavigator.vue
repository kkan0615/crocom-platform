<template>
  <t-navigator
    v-if="userNavigatorVisible"
    class="flex flex-col"
  >
    test
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
  name: 'UserNavigator',
  components: {
    TNavigator,
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)
    const userNavigatorVisible = computed(() => application.value.userNavigator)

    return {
      userNavigatorVisible,
    }
  }
})
</script>

