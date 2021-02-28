// import 'vue'
import { Dialog } from '@/types/plugins/dialog'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $dialog: Dialog
  }
}

import Vue from 'vue'
// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
// declare module 'vue/types/vue' {
//   // 3. Declare augmentation for Vue
//   interface Vue {
//     $dialog: Dialog
//   }
// }
