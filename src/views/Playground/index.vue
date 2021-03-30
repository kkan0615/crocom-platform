<template>
  <div
    class="p-1 w-full"
  >
    <t-button
      class="mr-1"
      @click="test"
    >
      default
    </t-button>
    <t-button
      class="mx-1"
      disabled
      @click="test"
    >
      disabled
    </t-button>
    <t-button
      :border="border"
      class="mx-1"
      @click="test"
    >
      border
    </t-button>
    <t-button
      class="ml-1"
      flat
      @click="test"
    >
      flat
    </t-button>
    <t-horizontal-input
      label="Horizontal Input"
      placeholder="placeholder"
    />
    <t-label-input
      label="Label input"
      placeholder="placeholder"
    />
    <t-label-input
      color="primary"
      label="Dense Label input"
      dense
      placeholder="placeholder"
    />
    <t-label-input
      color="primary"
      label="Dense Label input with pre-append"
      dense
      placeholder="placeholder"
      pre-append
    >
      <template
        #preAppend
      >
        temp
      </template>
    </t-label-input>
    <t-label-input
      v-model:value="msg"
      label="error test"
      dense
      placeholder="placeholder"
      :rules="rules"
    />
    {{ msg }}

    <t-list
      border
    >
      <t-icon-list>
        <img
          class="rounded-full"
          alt="A"
          src="https://randomuser.me/api/portraits/men/62.jpg"
        >
      </t-icon-list>
      <t-content-list>
        <t-title-list>
          Jack John
        </t-title-list>
        <t-subtitle-list>
          CEO &amp; managin director
        </t-subtitle-list>
      </t-content-list>
    </t-list>

    <br>

    <!-- 메뉴처럼 나오는거 -->
    <t-list>
      <t-icon-list>
        <img
          class="rounded-full"
          alt="A"
          src="https://randomuser.me/api/portraits/men/62.jpg"
        >
      </t-icon-list>
      <t-content-list>
        <t-title-list>
          menu
        </t-title-list>
        <t-subtitle-list>
          CEO &amp; managin director
        </t-subtitle-list>
      </t-content-list>
    </t-list>
    <t-badge>
      <div
        class="text-xl font-medium"
      >
        UR
      </div>
    </t-badge>
    <t-badge>
      <img
        class="rounded-full"
        alt="A"
        src="https://randomuser.me/api/portraits/men/62.jpg"
      >
    </t-badge>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import TButton from '@/components/commons/Button/index.vue'
import THorizontalInput from '@/components/commons/inputs/Horizontal/index.vue'
import TLabelInput from '@/components/commons/inputs/Label/index.vue'
import { InputRulesType } from '@/components/commons/inputs/Default/types'
import TList from '@/components/commons/List/index.vue'
import TIconList from '@/components/commons/List/components/icon.vue'
import TContentList from '@/components/commons/List/components/content.vue'
import TTitleList from '@/components/commons/List/components/title.vue'
import TSubtitleList from '@/components/commons/List/components/subtitle.vue'
import TBadge from '@/components/commons/Badge/index.vue'

export default defineComponent({
  name: 'Playground',
  components: {
    TButton,
    THorizontalInput,
    TLabelInput,
    TList,
    TIconList,
    TContentList,
    TTitleList,
    TSubtitleList,
    TBadge,
  },
  setup () {
    const msg = ref('Playground File')
    const border = ref(true)
    const rules = ref([
      v => !!v || 'value is required',
      (v: string) => {
        if (!v) return true

        if (v.length > 5) return 'value length is over 5'

        return true
      }
    ] as Array<InputRulesType>)

    const test = () => {
      alert('clicked!')
    }

    return {
      msg,
      border,
      rules,
      test
    }
  }
})
</script>
