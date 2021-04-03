<template>
  <t-sub-navigator
    v-if="subNavigatorVisible"
    class="pa-2"
  >
    <channel-menu
      v-for="channel in channels"
      :key="channel.id"
      :channel="channel"
      @click="onClickChennlMenu(channel)"
    />
    <add-channel />
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
import { defineComponent, computed } from 'vue'
import TSubNavigator from '@/components/commons/layouts/Navigator/components/SubNavigator.vue'
import ChannelMenu from '@/layouts/general/components/ChannelMenu.vue'
import AddChannel from '@/layouts/general/components/AddChannel.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'
import { Channel } from '@/types/model/channel/channel'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TDropdownMenu,
    TCard,
    ChannelMenu,
    AddChannel
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const channels = computed(() => store.state.channel.channels)
    const application = computed(() => store.state.application)
    const subNavigatorVisible = computed(() => application.value.subNavigator)

    /**
     * Home to channel
     * @param channel
     */
    const onClickChennlMenu = async (channel: Channel) => {
      await router.push({ name: 'ChannelMainWithOutRoomId', params: { id: channel.id } })
    }

    return {
      subNavigatorVisible,
      channels,
      onClickChennlMenu,
    }
  }
})
</script>
