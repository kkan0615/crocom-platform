<template>
  <t-app-bar
    class="left-0 top-0 absolute "
    style="z-index: 100"
  >
    <t-icon
      class="text-white ml-2"
      @click="changeNavigatorStatus"
    >
      reorder
    </t-icon>
    <!--    end part-->
    <div
      class="ml-auto mr-2"
    >
      <auth-menu />
    </div>
  </t-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TAppBar from '@/components/commons/layouts/Appbar/index.vue'
import AuthMenu from '@/layouts/general/components/AuthMenu.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'

export default defineComponent({
  name: 'AppBar',
  components: {
    TAppBar,
    TIcon,
    AuthMenu
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)

    const changeNavigatorStatus = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_SUB_NAVIGATOR)
    }

    return {
      changeNavigatorStatus,
    }
  }
})
</script>
