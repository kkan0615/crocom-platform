<template>
  <t-navigator
    v-if="navigatorVisible"
    class="flex flex-col"
  >
    <div
      class="flex"
    >
      <div
        class="flex-auto"
      >
        {{ currentChannel.title }}
      </div>
      <t-icon>
        help_outlined
      </t-icon>
      <div
        class="flex-shrink-0 justify-end"
        @click="changeUserNavigatorStatus"
      >
        <t-icon>
          {{ userNavigatorVisible ? 'menu_open' : 'menu' }}
        </t-icon>
      </div>
    </div>
    <t-divider />
    <!-- Home menu item -->
    <t-sub-menu
      @click="onClickHomeMenu"
    >
      <t-icon
        class="mr-2"
      >
        person
      </t-icon>
      Home
    </t-sub-menu>
    <!-- card list item -->
    <t-sub-menu
      @click="onClickHomeMenu"
    >
      <t-icon
        class="mr-2"
      >
        person
      </t-icon>
      Todo
    </t-sub-menu>
    <!-- Calendar item -->
    <t-sub-menu
      @click="onClickHomeMenu"
    >
      <t-icon
        class="mr-2"
      >
        event_available
      </t-icon>
      Calendar
    </t-sub-menu>
    <div
      class="flex-grow overflow-y-auto"
    >
      <!-- Chat list -->
      <t-menu-group
        v-for="group in groupsAndRooms"
        :key="group.id"
        open
      >
        <template
          #icon
        >
          <t-icon
            class="mr-2"
          >
            question_answer
          </t-icon>
        </template>
        <template
          #label
        >
          {{ group.title }}
        </template>
        <div>
          <t-sub-menu
            v-for="room in group.rooms"
            :key="room.id"
            class="p-1 space-y-2 pl-7"
            @click="onClickChatRoom(room)"
          >
            {{ room.title }}
          </t-sub-menu>
        </div>
      </t-menu-group>
    </div>
    <template
      #footer
    >
      <t-button
        block
      >
        <span>Customize</span>
      </t-button>
    </template>
  </t-navigator>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TNavigator from '@/components/commons/layouts/Navigator/index.vue'
import TButton from '@/components/commons/Button/index.vue'
import TMenuGroup from '@/components/commons/layouts/Navigator/components/MenuGroup.vue'
import TIcon from '@/components/commons/Icon/index.vue'
import TSubMenu from '@/components/commons/layouts/Navigator/components/SubMenu.vue'
import TDivider from '@/components/commons/Divider/inedx.vue'
import useStore from '@/store'
import { ApplicationActionTypes } from '@/store/modules/application/actions'
import { useRoute, useRouter } from 'vue-router'
import { ChannelRoomInfo } from '@/types/model/channel/room'

export default defineComponent({
  name: 'Navigator',
  components: {
    TNavigator,
    TButton,
    TMenuGroup,
    TIcon,
    TSubMenu,
    TDivider,
  },
  setup () {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const application = computed(() => store.state.application)
    const navigatorVisible = computed(() => application.value.navigator)
    const userNavigatorVisible = computed(() => application.value.userNavigator)
    const currentChannel = computed(() => store.state.channel.currentChannel)
    const groupsAndRooms = computed(() => store.state.channel.groupsAndRooms)

    const changeNavigatorStatus = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_NAVIGATOR)
    }

    const changeUserNavigatorStatus = async () => {
      await store.dispatch(ApplicationActionTypes.CHANGE_USER_NAVIGATOR)
    }

    const onClickHomeMenu = async () => {
      const currentChannelId = route.params.channelId
      if (currentChannelId)
        await router.push({ name: 'HomeChannel', params: { channelId: currentChannelId } })
    }

    const onClickChatRoom = async (chatRoom: ChannelRoomInfo) => {
      await router.push({ name: 'ChatRoomChannel', params: { chatId: chatRoom.id } })
    }

    return {
      navigatorVisible,
      userNavigatorVisible,
      currentChannel,
      groupsAndRooms,
      changeNavigatorStatus,
      changeUserNavigatorStatus,
      onClickHomeMenu,
      onClickChatRoom,
    }
  }
})
</script>
