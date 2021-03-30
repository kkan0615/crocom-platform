<!--
@TODO:
  1. 색깔 변경 만들기
-->
<template>
  <!--  avatar   -->
  <!--  @TODO: 다음꺼 삭제하기 https://randomuser.me/api/portraits/men/62.jpg -->
  <div
    class="flex relative bg-orange-500 justify-center items-center m-1 mr-2 text-white"
    :class="wrapperClasses"
  >
    <slot />
    <slot
      name="status"
    >
      <div
        class="flex justify-center items-center rounded-full bg-green-500 absolute"
        :class="statusClasses"
      >
        <t-icon
          v-if="icon"
          class="text-sm"
        >
          {{ icon }}
        </t-icon>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TIcon from '@/components/commons/Icon/index.vue'

export default defineComponent({
  name: 'TBadge',
  components: {
    TIcon,
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 12,
    },
    statusSize: {
      type: Number,
      required: false,
      default: 4,
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    right: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  setup (props) {
    const wrapperClasses = computed(() => {
      return {
        'rounded-full': props.rounded,
        [`w-${props.size}`]: true,
        [`h-${props.size}`]: true,
      }
    })

    const statusClasses = computed(() => {
      const classes: Record<string, boolean> = {
        [`w-${props.statusSize}`]: true,
        [`h-${props.statusSize}`]: true,
      }

      if (props.right) {
        classes['bottom-0'] = true
        classes['right-0'] = true
      }

      return classes
    })

    return {
      wrapperClasses,
      statusClasses,
    }
  }
})
</script>
