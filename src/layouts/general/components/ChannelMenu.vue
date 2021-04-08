<template>
  <t-dropdown-menu
    right
  >
    <template
      #activator
    >
      <div
        class="w-full h-full ma-4 cursor-pointer border-l-4 border-red-300"
      >
        <div
          class="w-full h-full rounded-lg flex justify-center items-center"
        >
          <!-- @TODO: Component로 변경하기 -->
          <img
            class="w-14 h-14 rounded-lg bg-gray-500"
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
import { ref, defineComponent } from 'vue'
import { Channel } from '@/types/model/channel/channel'
import TDropdownMenu from '@/components/commons/menu/Dropdown/index.vue'
import TCard from '@/components/commons/Card/index.vue'

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

    return {
      imageLoaded,
      channelProp: props.channel as Channel
    }
  }
})
</script>
