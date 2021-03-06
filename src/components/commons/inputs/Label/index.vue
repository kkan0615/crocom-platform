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
      :color="color"
      :block="block"
      :border="border"
      :focus="focus"
    >
      <template
        #preAppend
      >
        <slot
          name="preAppend"
        />
      </template>
    </t-default-input>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue'
import TDefaultInput from '@/components/commons/inputs/Default/index.vue'
import { inputProps } from '@/components/commons/inputs/Default/types/index.ts'

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
      const style: Record<string, boolean> = {
        'block': true,
        'text-black': true,
      }

      if (props.color)
        style[`text-${props.color}`] = true

      return style
    })

    return {
      msg,
      wrapperStyle,
      labelStyle,
    }
  }
})
</script>
