import { ComponentObjectPropsOptions } from 'vue'

export type CustomComponentObjectPropsOptions<T> = ComponentObjectPropsOptions<Record<keyof T, unknown>>
