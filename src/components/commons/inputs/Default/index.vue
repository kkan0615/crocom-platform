<template>
  <div
    :class="wrapperStyle"
  >
    <!-- Pre-append -->
    <div
      v-if="preAppend"
      :class="preAppendStyle"
    >
      <slot
        name="preAppend"
      />
    </div>
    <!-- Input Field -->
    <slot
      name="input"
    >
      <input
        :id="id"
        :type="type"
        :value="value"
        :class="inputStyle"
        :placeholder="placeholder"
        :readonly="readOnly"
        :disabled="disabled"
        @input="onInput"
      >
    </slot>
  </div>
  <div
    v-if="errorMessage && !hideDetail"
    :class="detailStyle"
  >
    {{ errorMessage }}
  </div>
</template>

<script lang="ts">import { defineComponent, computed, ref, onMounted } from 'vue'
import inputProps, { InputRulesType } from '@/components/commons/Inputs/Default/types'

export default defineComponent({
  name: 'TDefaultInput',
  props: {
    ...inputProps
  },
  emits: [
    'update:value',
  ],
  setup (props, context) {
    /* Status of error */
    const errorStatus = ref(false)
    /* Display error message */
    const errorMessage = ref()

    onMounted(() => {
      /* Check validation before input has been mounted */
      checkValidation(props.value)
    })

    const checkValidation = (value: string) => {
      /* Error handling */
      const rules = props.rules as Array<InputRulesType>
      if (!rules) {
        errorStatus.value = false
        errorMessage.value = ''
      }

      for (let i = 0; i < rules.length; i++) {
        const result = rules[i](value)
        if (typeof result === 'string') {
          errorStatus.value = true
          errorMessage.value = result
        } else {
          errorStatus.value = !result
          errorMessage.value = ''
        }
      }
    }

    const onInput = (event: InputEvent) => {
      /* Event.data can be null */
      const value = (event.target as any).value || ''
      /* Error handling */
      checkValidation(value)
      /* Emit to input */
      context.emit('update:value', value)
    }

    const inputStyle = computed(() => {
      return {
        'default-input': true,
        'rounded-sm': true,
        'bg-gray-100': true,
        'px-4': true,
        'py-2': props.dense,
        'py-3': !props.dense,
        'flex-1': props.preAppend,
        'w-full': !props.preAppend && props.block,
        'focus:outline-none': props.focus,
        'focus:ring-2': props.focus,
        [`focus:ring-${props.color}`]: props.focus && props.color && errorStatus.value,
        'focus:border-transparent': props.focus,
        'ring-2': props.border || errorStatus.value,
        [`ring-${props.color}`]: props.border && props.color && errorStatus.value,
        'ring-error': errorStatus.value
      }
    })

    const wrapperStyle = computed(() => {
      return {
        'my-1': true,
        'text-sm': props.dense,
        'text-base': !props.dense,
        'flex': props.preAppend,
        'w-full': !props.preAppend,
        'shadow-md': props.shadow,
        [`text-${props.color}`]: props.color,
      }
    })

    const preAppendStyle = computed(() => {
      return {
        'text-sm': true,
        'rounded-l': true,
        'px-4': true,
        'py-2': true,
        'bg-gray-300': true,
        'whitespace-no-wrap': true,
      }
    })

    const detailStyle = computed(() => {
      return {
        'my-1': true,
        'text-red-500': true,
        'text-sm': props.dense,
        'text-base': !props.dense,
        'shadow-md': props.shadow,
      }
    })

    return {
      /* State */
      errorStatus,
      errorMessage,
      /* Computed */
      wrapperStyle,
      preAppendStyle,
      inputStyle,
      detailStyle,
      onInput,
    }
  }
})
</script>

