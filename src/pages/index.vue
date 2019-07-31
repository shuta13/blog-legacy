<template lang="pug">
  .container
    .bar-wrap
      .top-bar did0es.blog
    .item-wrap

      .item
        a(href="/posts/2019-07-19-about-me")
          .title {{ title_20190719AboutMe }}
          .meta-wrap
            .tags-wrap tag
              .tags(v-for="tag in tags_20190719AboutMe" :key="tag") {{ tag }}
            .category-wrap category
              a(href="/posts/other").category {{ category_20190719AboutMe }}
            .date-wrap date
              .date 2019/07/19

      .item
        a(href="/posts/2019-07-09-promare-movie")
          .title {{ title_20190709PromareMovie }}
          .meta-wrap
            .tags-wrap tag
              .tags(v-for="tag in tags_20190709PromareMovie" :key="tag") {{ tag }}
            .category-wrap category
              a(href="/posts/other").category {{ category_20190709PromareMovie }}
            .date-wrap date
              .date 2019/07/09

    .side-menu-wrap
      side-menu.side-menu
    app-blinder
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import AppBlinder from '~/components/AppBlinder.vue'
import SideMenu from '~/components/SideMenu.vue'
import _20190709PromareMovie from '../contents/json/2019-07-09-promare-movie.json'
import _20190719AboutMe from '../contents/json/2019-07-19-about-me.json'

@Component({
  components: {
    AppBlinder,
    SideMenu
  }
})
class Home extends Vue {
  @Provide()
  target = ''

  title_20190709PromareMovie = _20190709PromareMovie.title // eslint-disable-line
  tags_20190709PromareMovie = _20190709PromareMovie.tags // eslint-disable-line
  category_20190709PromareMovie = _20190709PromareMovie.category // eslint-disable-line

  title_20190719AboutMe = _20190719AboutMe.title // eslint-disable-line
  tags_20190719AboutMe = _20190719AboutMe.tags // eslint-disable-line
  category_20190719AboutMe = _20190719AboutMe.category // eslint-disable-line

  head () {
    return {
      title: 'home',
      meta: [
        { hid: 'description', property: 'description', content: '@did0esのブログ' },
        { hid: 'og:description', property: 'og:description', content: '@did0esのブログ' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://blog.did0es.me' },
        { hid: 'og:title', property: 'og:title', content: 'did0es.blog' },
      ]
    }
  }
}
export default Home
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html body {
  width: 100vw;
  font-size: 62.5%;
}
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  font-family: 'Roboto';
}
a {
  width: 100vw;
  text-decoration: none;
  color: #000;
}
.bar-wrap {
  position: absolute;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
}
.top-bar {
  font-family: 'Chakra Petch';
  font-size: 40px;
}
.meta-wrap {
  font-family: 'Chakra Petch';
  display: flex;
  justify-content: center;
}
.item-wrap {
  margin-top: 6vh;
}
.item {
  background-color: rgba(255, 250, 255, 1);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2));
  width: 360px;
  height: 142px;
  border-radius: 3px;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  transition: background-color .8s;
}
.title {
  font-size: 1.2rem;
  margin: 0.4rem 0.4rem;
}
.date-wrap {
  text-align: right;
}
.date {
  width: 72px;
  font-size: 0.8rem;
}
.tags-wrap, .category-wrap, .date-wrap {
  width: 80px;
  text-align: center;
  font-size: 0.8rem;
}
// 上書き
.date-wrap {
  width: 90px;
}
.tags, .category, .date {
  font-size: 0.8rem;
  font-family: 'Cutive Mono';
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: 8px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 64px;
  padding: 2px 2px;
}
.tags {
  background-color: #fff;
}
.category {
  background-color: rgba(160, 160, 160, 1);
  transition: background-color .4s;
}
.category:hover {
  background-color: rgba(220, 220, 220, 1);
}
.date {
  width: 80px;
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
  width: 28vw;
  height: 100vh;
  left: 0;
}
.side-menu {
  @media screen and (max-width: 768px) {
    display: none; // スマホ用メニュー出来たら外す
  }
}
</style>
