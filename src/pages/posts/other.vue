<template lang="pug">
  app-other
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import AppOther from '~/components/AppOther.vue'
@Component({
  components: {
    AppOther
  }
})
class Other extends Vue {}
export default Other
</script>
