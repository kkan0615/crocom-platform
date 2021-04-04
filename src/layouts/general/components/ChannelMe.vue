<template>
  <div
    class="w-16 h-16 cursor-pointer"
    @click="onClickHome"
  >
    <div
      class="w-full h-full rounded-lg flex justify-center items-center bg-gray-500 text-white hover:opacity-50"
    >
      <t-icon
        class="text-6xl"
      >
        home
      </t-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TIcon from '@/components/commons/Icon/index.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ChannelMe',
  components: {
    TIcon,
  },
  setup () {
    const router = useRouter()

    const onClickHome = () => {
      router.push({ name: 'Home' })
    }

    return {
      onClickHome
    }
  }
})
</script>
