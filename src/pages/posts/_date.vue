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
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import SideMenu from '~/components/SideMenu.vue'
import FireObject01 from '~/components/FireObject01.vue'
import FireObject02 from '~/components/FireObject02.vue'

@Component({
  components: {
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
a {
  color: rgb(120, 40, 40);
  transition: color .2s;
}
a:hover {
  color: rgb(209, 168, 175);
}
img {
  width: 28vw;
  min-width: 300px;
  height: auto;
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
    display: none;
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
  width: 48vw;
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    right: 0;
    margin-right: 16vw;
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
  background-color: rgba(206, 153, 163, 0.8);
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
