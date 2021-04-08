<template>
  <t-navigator
    v-if="userNavigatorVisible"
    class="flex flex-col"
  >
    <div
      class="text-sm"
    >
      User list
    </div>
    <t-list
      v-for="member in currentChannelMembers"
      :key="member.id"
      border
    >
      <t-icon-list>
        <t-badge
          class="w-full h-full"
        >
          <img
            class="rounded-full"
            alt="A"
            :src="member.user.img"
          >
        </t-badge>
      </t-icon-list>
      <t-content-list
        class="w-36"
      >
        <t-title-list>
          {{ member.user.nickname }}
        </t-title-list>
        <t-subtitle-list>
          {{ member.user.description }}
        </t-subtitle-list>
      </t-content-list>
    </t-list>
  </t-navigator>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TNavigator from '@/components/commons/layouts/Navigator/index.vue'

import useStore from '@/store'
import TList from '@/components/commons/List/index.vue'
import TIconList from '@/components/commons/List/components/icon.vue'
import TContentList from '@/components/commons/List/components/content.vue'
import TTitleList from '@/components/commons/List/components/title.vue'
import TSubtitleList from '@/components/commons/List/components/subtitle.vue'
import TBadge from '@/components/commons/Badge/index.vue'

export default defineComponent({
  name: 'UserNavigator',
  components: {
    TNavigator,
    TList,
    TIconList,
    TContentList,
    TTitleList,
    TSubtitleList,
    TBadge,
  },
  setup () {
    const store = useStore()
    const application = computed(() => store.state.application)
    const userNavigatorVisible = computed(() => application.value.userNavigator)
    const currentChannelMembers = computed(() => store.state.channel.currentChannelMembers)

    return {
      userNavigatorVisible,
      currentChannelMembers,
    }
  }
})
</script>

