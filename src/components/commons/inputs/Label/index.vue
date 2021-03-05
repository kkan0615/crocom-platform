<template>
  <div
    :class="wrapperStyle"
  >
    <label
      :class="labelStyle"
      :for="id"
    >
      <slot
        name="label"
      >
        {{ label }}
      </slot>
    </label>
    <t-default-input
      :id="id"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="type"
      :dense="dense"
      :shadow="shadow"
      :pre-append="preAppend"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import TDefaultInput from '@/components/commons/Inputs/Default/index.vue'
import inputProps from '@/components/commons/Inputs/Default/types'

export default defineComponent({
  name: 'TLabelInput',
  components :{
    TDefaultInput
  },
  props: {
    ...inputProps,
    label: {
      type: String,
      default: '',
      required: false
    },
  },
  setup (props) {
    const msg = ref('Home File')
    const wrapperStyle = computed(() => {
      return {
        'my-5': true,
        'text-sm': props.dense,
        'text-base': !props.dense,
        'w-full': true,
        'font-bold': true,
        'shadow-md': props.shadow,
      }
    })

    const labelStyle = computed(() => {
      return {
        'block': true,
        'text-black': true,
      }
    })

    return {
      msg,
      wrapperStyle,
      labelStyle,
    }
  }
})
</script>
