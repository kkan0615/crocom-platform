<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useStore from '@/store'
import { getTeamMenuGroupsByTeamId } from '@/dummy/team/teamGroup'
import { TeamActionTypes } from '@/store/modules/team/actions'

export default defineComponent({
  name: 'TeamMain',
  setup () {
    const store = useStore()

    const route = useRoute()
    const { id } = route.params

    onMounted(async () => {
      if (Number(id)) {
        const responseData = (await getTeamMenuGroupsByTeamId(Number(id)))
        await store.dispatch(TeamActionTypes.SET_CURRENT_TEAM_MENU_GROUP, responseData)

        console.log('hi')
      }
    })

    const msg = ref('Team Main')

    return {
      msg,
    }
  }
})
</script>
