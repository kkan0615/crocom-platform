<template>
  <t-dropdown-menu
    right
  >
    <template
      #activator
    >
      <div
        class="w-full h-full cursor-pointer border-red-300 "
        :class="{ 'border-l-4': currentChannel.id === channelProp.id, 'pl-1': currentChannel.id === channelProp.id, 'mr-3': currentChannel.id === channelProp.id}"
      >
        <div
          class="w-full h-full rounded-lg flex justify-center items-center"
        >
          <!-- @TODO: Component로 변경하기 -->
          <img
            class="w-14 h-14 rounded-full bg-gray-500"
            :class="{ 'animate-pulse': !imageLoaded }"
            :src="channelProp.img"
            :alt="channelProp.title"
            @load="imageLoaded = true"
          >
        </div>
      </div>
    </template>
    <t-card
      width="10"
    >
      {{ channelProp.title }}
    </t-card>
  </t-dropdown-menu>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import { Channel } from '@/types/model/channel/channel'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'
import useStore from '@/store'

export default defineComponent({
  name: 'ChannelMenu',
  components: {
    TDropdownMenu,
    TCard,
  },
  props: {
    channel: {
      type: Object,
      required: false,
      default: () => {
        return {} as Channel
      }
    }
  },
  setup (props) {
    const imageLoaded = ref(false)
    const store = useStore()

    const currentChannel = computed(() => store.state.channel.currentChannel)

    return {
      imageLoaded,
      currentChannel,
      channelProp: props.channel as Channel
    }
  }
})
</script>
