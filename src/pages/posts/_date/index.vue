<template lang="pug">
  .container
    .contents-wrap
      .title {{ title }}
      .post-meta 
        time {{ params.date }}
      div(v-html="bodyHtml")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class extends Vue {
  title = ''
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/json/${params.date}.json`), { params });
  }
  head() {
    const title = this.title
    return {
      title: title
    }
  }
}
</script>

<style>
@import '~/assets/tomorrow-night-bright.css';
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.contents-wrap {
  width: 60vw;
}
.title {
  font-size: 2rem;
}
.post-meta {
  font-size: 0.8em;
  color: #888;
  margin-top: -1rem;
  margin-bottom: 2.4rem;
  text-align: right;
}
</style>
