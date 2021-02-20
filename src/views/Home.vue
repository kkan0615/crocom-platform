<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button
    @click="increaseCount"
    >
      {{ count }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup () {
    const count = ref<number>(0)
    const increaseCount = () => {
      count.value++
    }
    return { count, increaseCount }
  }
})
</script>
