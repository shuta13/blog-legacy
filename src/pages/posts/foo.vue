<template lang="pug">
  h1 foo
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
class Hoge extends Vue {
  head() {
    return {
      title: 'hoge',
      meta: [
        { hid: 'description', property: 'description', content: 'foo' },
        { hid: 'og:description', property: 'og:description', content: 'foo' },
        { hid: 'og:title', property: 'og:title', content: 'piyo' },
        { hid: 'og:url', property: 'og:url', content: this.url }
      ]
    }
  }
  get url() {
    return `https://did0es-blog.netlify.com${this.$route.path}`
  }
}
export default Hoge
</script>
