<template>
  <div
    class="h-full"
  >
    <div
      class="flex"
    >
      <!-- 버튼용 따로 만들기 -->
      <t-button
        class=""
        @click="foramt('italic')"
      >
        <t-icon>
          format_italic
        </t-icon>
      </t-button>
      <t-button
        @click="foramt('bold')"
      >
        <t-icon>
          format_bold
        </t-icon>
      </t-button>
      <t-icon>
        format_align_left
      </t-icon>
      <t-icon>
        format_align_center
      </t-icon>
      <t-icon>
        format_align_right
      </t-icon>
    </div>
    <div
      ref="editorRef"
      class="border-2 h-full"
      contenteditable
    >
      hello World
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'
import TIcon from '@/components/commons/Icon/index.vue'

export default defineComponent({
  name: 'RichEditor',
  components:{
    TButton,
    TIcon,
  },
  setup () {
    const editorRef = ref<HTMLDivElement | null>(null)

    const foramt = (command: string, value = '') => {
      console.log('hi', command)
      document.execCommand(command, false, '')
      if (editorRef.value) {
        editorRef.value.focus()
      }
    }

    return {
      editorRef,
      foramt,
    }
  }
})
</script>
