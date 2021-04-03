<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ChannelHome',
  setup () {
    const store = useStore()
    // onMounted(() => {
    //   const channel = getTeam
    // })

    const msg = ref('Home File')

    return {
      msg,
    }
  }
})
</script>
