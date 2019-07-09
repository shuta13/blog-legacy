<template lang="pug">
  .container
    fire-shader
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FireShader from '~/components/FireShader.vue'

@Component({
  components: {
    FireShader
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
