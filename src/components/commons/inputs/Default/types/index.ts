import { CustomComponentObjectPropsOptions } from '@/types/vue/props'
import { v4 } from 'uuid'

export interface InputProps {
  value: string
  id: string
  placeholder: string
  type: string
  preAppend: string
  readOnly: string
  disabled: string
  color: string
  border: string
  focus: string
  flat: string
  rounded: string
  block: string
  shadow: string
  dense: string
  rules: string
  hideDetail: string
}

export type InputRulesType = (v: string | number) => string | boolean

export const inputProps: CustomComponentObjectPropsOptions<InputProps> = {
  value: {
    type: [String, Number],
    required: false,
    default: ''
  },
  id: {
    type: String,
    default: v4(),
    required: false
  },
  placeholder: {
    type: String,
    default: '',
    required: false
  },
  type: {
    type: String,
    default: 'text',
    required: false
  },
  preAppend: {
    type: Boolean,
    default: false,
    required: false,
  },
  readOnly: {
    type: Boolean,
    default: false,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  color: {
    type: String,
    default: '',
    required: false,
  },
  border: {
    type: Boolean,
    default: false,
    required: false,
  },
  focus: {
    type: Boolean,
    default: true,
    required: false,
  },
  flat: {
    type: Boolean,
    default: false,
    required: false,
  },
  rounded: {
    type: Boolean,
    default: false,
    required: false,
  },
  /* To make full size of block */
  block: {
    type: Boolean,
    default: false,
    required: false,
  },
  shadow: {
    type: Boolean,
    default: false,
    required: false,
  },
  dense: {
    type: Boolean,
    default: false,
    required: false,
  },
  rules: {
    type: Array,
    default: () => [] as Array<InputRulesType>,
    required: false
  },
  hideDetail: {
    type: Boolean,
    default: false,
    required: false,
  }
}

export default inputProps
