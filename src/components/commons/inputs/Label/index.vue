<template>
  <div
    :class="wrapperStyle"
  >
    <!-- Label Field -->
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
    <!-- Input field -->
    <t-default-input
      :id="id"
      :value="value"
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
      :rules="rules"
      :hide-detail="hideDetail"
      @update:value="onInput"
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
import { defineComponent, computed } from 'vue'
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
  emits: [
    'update:value',
  ],
  setup (props, context) {

    const onInput = (value: string | number) => {
      context.emit('update:value', value)
    }

    const wrapperStyle = computed(() => {
      return {
        'w-full': true,
        'font-bold': true,
        'text-sm': props.dense,
        'text-base': !props.dense,
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
      wrapperStyle,
      labelStyle,
      onInput,
    }
  }
})
</script>
