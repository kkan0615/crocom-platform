import { CustomComponentObjectPropsOptions } from '@/types/vue/props'
import { v4 } from 'uuid'

export interface InputProps {
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
}

export const inputProps: CustomComponentObjectPropsOptions<InputProps> = {
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
}

export default inputProps
