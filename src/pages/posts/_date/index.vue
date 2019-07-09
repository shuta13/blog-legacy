<template lang="pug">
  .container
    fire-shader.fire-shader
    .contents-wrap
      .title {{ title }}
      .post-meta 
        time {{ params.date }}
      .body(v-html="bodyHtml")
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
  width: 100vw;
  display: flex;
  justify-content: center;
}
.fire-shader {
  position: fixed;
}
.contents-wrap {
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    width: 80vw;
  }
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-bottom: 2vh;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  width: 60vw;
  color: #fff;
  font-size: 1rem;
}
.title {
  @media screen and (max-width: 1000px) {
    height: 7vh;
    width: 76vw;
    font-size: 3.2rem;
  }
  height: 10vh;
  width: 44vw;
  display: flex;
  align-items: center;
  padding: 1.2vh 1.2vw;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, .6);
}
.post-meta {
  @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
    margin-top: -2rem;
  }
  font-size: 0.8rem;
  margin-top: -1rem;
  margin-bottom: 2.4rem;
  text-align: right;
}
.body {
  @media screen and (max-width: 1000px) {
    line-height: 3.2rem;
  }
  line-height: 2rem;
}
</style>
