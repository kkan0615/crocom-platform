<template>
  <t-sub-navigator
    v-if="subNavigatorVisible"
    class="pa-4"
  >
    <channel-me />
    <t-divider />
    <channel-menu
      v-for="channel in channels"
      :key="channel.id"
      :channel="channel"
      @click="onClickChannelMenu(channel)"
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
import ChannelMe from '@/layouts/general/components/ChannelMe.vue'
import AddChannel from '@/layouts/general/components/AddChannel.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'
import { Channel } from '@/types/model/channel/channel'
import { useRouter } from 'vue-router'
import TDivider from '@/components/commons/Divider/inedx.vue'

export default defineComponent({
  name: 'SubNavigatorGeneral',
  components: {
    TSubNavigator,
    TIcon,
    TDropdownMenu,
    TCard,
    ChannelMenu,
    AddChannel,
    ChannelMe,
    TDivider
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
    const onClickChannelMenu = async (channel: Channel) => {
      await router.push({ name: 'HomeChannel', params: { channelId: channel.id.toString() } })
    }

    return {
      subNavigatorVisible,
      channels,
      onClickChannelMenu,
    }
  }
})
</script>
