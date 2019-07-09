<template lang="pug">
  .container
    fire-object01
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FireObject01 from '~/components/FireObject01.vue'

@Component({
  components: {
    FireObject01
  }
})
export default class extends Vue {
  head() {
    return {
      title: 'hoge'
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html body {
  width: 100vw;
}
</style>
