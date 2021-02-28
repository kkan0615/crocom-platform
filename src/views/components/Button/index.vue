<template>
  <div>
    <t-button
      @click="onClickButton"
    >
      default
    </t-button>
    <t-button
      border
      class="mx-2"
      @click="onClickButton"
    >
      border
    </t-button>
    <t-button
      flat
      @click="onClickButton"
    >
      flat
    </t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'

export default defineComponent({
  name: 'Playground',
  components: {
    TButton
  },
  setup () {
    const onClickButton = () => {
      alert('Button is clicked')
    }

    return {
      onClickButton
    }
  }
})
</script>
