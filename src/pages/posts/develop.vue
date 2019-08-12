<template lang="pug">
  app-develop
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import AppDevelop from '~/components/AppDevelop.vue'
@Component({
  components: {
    AppDevelop
  }
})
class Develop extends Vue {}
export default Develop
</script>
