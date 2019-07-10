<template lang="pug">
  .container
    transition(name="fire1")
      //- 平めの方
      fire-object01.fire-object(v-if="!fire")
    transition(name="fire2")
      //- 出っ張ってる方
      fire-object02.fire-object(v-if="fire")
    .contents-wrap
      .title {{ title }}
      .post-meta
        time {{ params.date }}
      .body(v-html="bodyHtml")
    app-blinder
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TweenMax, Power4 } from 'gsap'
import AppBlinder from '~/components/AppBlinder.vue'
import FireObject01 from '~/components/FireObject01.vue'
import FireObject02 from '~/components/FireObject02.vue'

@Component({
  components: {
    AppBlinder,
    FireObject01,
    FireObject02
  }
})
export default class extends Vue {
  title = ''
  fire = true
  width = 0
  height = 0
  scrollY = 0
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/json/${params.date}.json`), { params });
  }
  mounted() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    window.addEventListener('scroll', this.handleScroll)
  }
  head() {
    const title = this.title
    return {
      title: title
    }
  }
  handleScroll() {
    this.scrollY = window.scrollY
    if (scrollY > this.height/5 * 4) {
      this.fire = false
    }
    if (scrollY < this.height/5 * 4) {
      this.fire = true
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
.fire-object {
  position: fixed;
}
.wrap {
  display: flex;
  justify-content: center;
  width: 60vw;
  height: auto;
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
.fire1-enter-active, .fire1-leave-active,
.fire2-enter-active, .fire2-leave-active {
  transition: opacity 0.5s;
}
.fire1-enter, .fire1-leave-to,
.fire2-enter, .fire2-leave-to {
  opacity: 0.2;
}
</style>
