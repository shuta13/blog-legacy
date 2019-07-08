<template lang="pug">
  .container
    h1 hoge
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  head() {
    return {
      title: 'hoge'
    }
  }
}
</script>
