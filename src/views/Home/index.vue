<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
// import { useStore } from 'vuex'
import useStore from '@/store'

export default defineComponent({
  name: 'Home',
  setup () {
    const msg = ref('Home File')
    // const store = useStore()

    onMounted(() => {
      // console.log(store.state)
      // console.log(store.state.user)
    })

    return {
      msg
    }
  }
})
</script>
