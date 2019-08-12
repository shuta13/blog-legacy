<template lang="pug">
  .container
    .bar-wrap
      .top-bar did0es.blog
    .item-wrap

      a(href="/posts/2019-08-12-nuxt-lazy-image")
        .item
          .title {{ title_20190812 }}
          .meta-wrap
            .tags-wrap tag
              .tags(v-for="tag in tags_20190812" :key="tag") {{ tag }}
            .category-wrap category
              a(href="/posts/other").category.other {{ category_20190812 }}
            .date-wrap date
              .date 2019/08/12
      
      a(href="/posts/2019-08-01-about-me")
        .item
          .title {{ title_20190801 }}
          .meta-wrap
            .tags-wrap tag
              .tags(v-for="tag in tags_20190801" :key="tag") {{ tag }}
            .category-wrap category
              a(href="/posts/other").category.other {{ category_20190801 }}
            .date-wrap date
              .date 2019/08/01

      a(href="#")
        .item
          .title {{ title_20190709 }}
          .meta-wrap
            .tags-wrap tag
              .tags(v-for="tag in tags_20190709" :key="tag") {{ tag }}
            .category-wrap category
              a(href="/posts/other").category.other {{ category_20190709 }}
            .date-wrap date
              .date 2019/07/09

    .side-menu-wrap
      side-menu.side-menu
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import SideMenu from '~/components/SideMenu.vue'

import _20190709PromareMovie from '../contents/json/2019-07-09-promare-movie.json'
import _20190801AboutMe from '../contents/json/2019-08-01-about-me.json'
import _20190812NuxtLazyImage from '../contents/json/2019-08-12-nuxt-lazy-image.json'

@Component({
  components: {
    SideMenu
  }
})
class Home extends Vue {
  @Provide()

  title_20190709 = _20190709PromareMovie.title // eslint-disable-line
  tags_20190709 = _20190709PromareMovie.tags // eslint-disable-line
  category_20190709 = _20190709PromareMovie.category // eslint-disable-line

  title_20190801 = _20190801AboutMe.title // eslint-disable-line
  tags_20190801 = _20190801AboutMe.tags // eslint-disable-line
  category_20190801 = _20190801AboutMe.category // eslint-disable-line

  title_20190812 = _20190812NuxtLazyImage.title // eslint-disable-line
  tags_20190812 = _20190812NuxtLazyImage.tags // eslint-disable-line
  category_20190812 = _20190812NuxtLazyImage.category // eslint-disable-line

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
  background-color: rgba(250, 250, 255, 1);
  width: 360px;
  height: 142px;
  border-radius: 3px;
  margin-top: 2vh;
  @media screen and (max-width: 768px) {
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
  }
  transition: background-color .8s;
}
.item:hover {
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
}
.title {
  left: 0;
  width: 100%;
  font-size: 1.2rem;
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
  font-size: 100%;
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
  height: auto;
  padding: 2px 2px;
}
.tags {
  background-color: #fff;
}
.other {
  background-color: rgba(160, 160, 160, 1);
  transition: background-color .4s;
}
.other:hover {
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
