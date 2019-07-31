<template lang="pug">
  .container(@mouseover="handleMouseEvent")
    .bg(v-if="!bgShow")
    .bg-objects(v-if="bgShow")
      transition(name="fire1")
        //- 平めの方
        fire-object01(v-if="!fire")
      transition(name="fire2")
        //- 出っ張ってる方
        fire-object02(v-if="fire")
    .contents-wrap
      .title {{ title }}
      .post-meta
        time {{ params.date }}
      .body(v-html="bodyHtml")
    .side-menu-wrap
      side-menu.side-menu
    app-blinder
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import AppBlinder from '~/components/AppBlinder.vue'
import SideMenu from '~/components/SideMenu.vue'
import FireObject01 from '~/components/FireObject01.vue'
import FireObject02 from '~/components/FireObject02.vue'

@Component({
  components: {
    AppBlinder,
    SideMenu,
    FireObject01,
    FireObject02,
  }
})
class Posts extends Vue {
  @Provide()
  title = ''
  fire = true
  bgShow = false
  sideMenuShow = false
  width = 0
  height = 0
  scrollY = 0

  asyncData ({ params }) {
    return Object.assign({}, require(`~/contents/json/${params.date}.json`), { params })
  }
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
    window.addEventListener('scroll', this.handleScroll)
    this.updateBgShow()
  }
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', property: 'description', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.title },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:url', property: 'og:url', content: this.url }
      ]
    }
  }
  get url() {
    return `https://blog.did0es.me${this.$route.path}`
  }
  handleScroll () {
    this.scrollY = window.scrollY
    if (scrollY > this.height / 5 * 4) {
      this.fire = false
    }
    if (scrollY < this.height / 5 * 4) {
      this.fire = true
    }
  }
  updateBgShow() {
    if (this.title === 'プロメア見てきた') this.bgShow = true
    else this.bgShow = false
  }
  handleMouseEvent(e) {
    if (e.offsetX > 340) this.sideMenuShow = true
    else if (e.offsetX <= 340) this.sideMenuShow = false
  }
}
export default Posts
</script>

<style>
@import '~/assets/tomorrow-night-bright.css';
a {
  color: rgba(140, 120, 160, 1);
  transition: color .4s;
}
a:hover {
  color: rgb(160, 80, 220);
}
</style>

<style lang="scss" scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(240, 240, 240, 1);
}
.bg-objects {
  position: fixed;
}
.side-menu-wrap {
  @media screen and (max-width: 768px) {
    width: 8vw;
    height: 8vw;
    margin-top: 1vw;
    margin-left: 1vw;
  }
  position: fixed;
  left: 0;
}
.side-menu {
  @media screen and (max-width: 768px) {
    display: none; // スマホ用メニュー出来たら外す
  }
}
.wrap {
  display: flex;
  justify-content: center;
  width: 60vw;
  height: auto;
}
.contents-wrap {
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    width: 80vw;
  }
  padding-top: 2vh;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-bottom: 2vh;
  background-color: rgba(255, 255, 255, .4);
  position: absolute;
  width: 56vw;
  color: #000;
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    right: 0;
    margin-right: 12vw;
  }
}
.title {
  @media screen and (max-width: 768px) {
    height: 10vh;
    width: 76vw;
    font-size: 1rem;
  }
  height: 10vh;
  width: 44vw;
  display: flex;
  align-items: center;
  padding: 1.2vh 1.2vw;
  font-size: 1.6rem;
  background-color: rgba(140, 120, 160, .8);
}
.post-meta {
  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin-top: -1rem;
  }
  font-size: 0.8rem;
  margin-top: -1rem;
  margin-bottom: 2.4rem;
  text-align: right;
}
.body {
  @media screen and (max-width: 768px) {
    line-height: 1.8rem;
  }
  line-height: 2rem;
}
.fire1-enter-active, .fire1-leave-active,
.fire2-enter-active, .fire2-leave-active {
  transition: opacity 0.8s;
}
.fire1-enter, .fire1-leave-to,
.fire2-enter, .fire2-leave-to {
  opacity: 0.2;
}
</style>
