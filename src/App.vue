<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { KeyOfLocalstorage } from '@/types/system/localstorage'
import { getCurrentTheme, ThemeMode } from '@/types/theme'

export default defineComponent({
  name: 'App',
  setup () {
    onMounted(() => {
      /* Set the theme to localstorage */
      localStorage.setItem(KeyOfLocalstorage.THEME, getCurrentTheme())

      if (getCurrentTheme() === ThemeMode.DARK_MODE) {
        if (document.documentElement.classList.contains(ThemeMode.LIGHT_MODE))
          document.documentElement.classList.remove(ThemeMode.LIGHT_MODE)
        document.documentElement.classList.add(ThemeMode.DARK_MODE)
      } else {
        if (document.documentElement.classList.contains(ThemeMode.DARK_MODE))
          document.documentElement.classList.remove(ThemeMode.DARK_MODE)
        document.documentElement.classList.add(ThemeMode.LIGHT_MODE)
      }
    })
  }
})
</script>
