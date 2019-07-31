<template lang="pug">
  .container
    .bar-wrap
      .top-bar #other
    .item-wrap

      .item
        a(href="/posts/2019-07-19-about-me")
          .title {{ title_20190719AboutMe }}
          .meta-wrap
            .date 2019-07-19
            .tags(v-for="tag in tags_20190719AboutMe") ・ {{ tag }}
            .category ・ category : {{ category_20190719AboutMe }}

      .item
        a(href="/posts/2019-07-09-promare-movie")
          .title {{ title_20190709PromareMovie }}
          .meta-wrap
            .date 2019-07-09
            .tags(v-for="tag in tags_20190709PromareMovie") ・ {{ tag }}
            .category ・ category : {{ category_20190709PromareMovie }}

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
class AppOther extends Vue {
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
      title: 'other'
    }
  }
}
export default AppOther
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
  @media screen and (max-width: 1000px) {
    font-size: 72px;
  }
  font-size: 2.4vw;
}
.item-wrap {
  margin-top: 6vh;
}
.item {
  background-color: rgba(255, 240, 255, 1);
  @media screen and (max-width: 768px) {
    width: 80vw;
    height: 20vh;
    border-radius: 20px;
  }
  @media screen and (max-width: 1300px) {
    width: 50vw;
    height: 20vw;
    border-radius: 10px;
  }
  width: 20vw;
  height: 12vh;
  border-radius: 3px;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  transition: background-color .6s;
}
.item:hover {
  background-color: rgba(240, 160, 200, 1);
}
.title {
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 1300px) {
    font-size: 2.8vw;
    margin-left: 1rem;
    margin-top: 1vw;
  }
  font-size: 1rem;
  margin: 0.4rem 0.4rem;
}
.date {
  text-align: right;
  @media screen and (max-width: 400px) {
    font-size: 3vw;
  }
  @media screen and (max-width: 1300px) {
    font-size: 2vw;
  }
  font-size: 0.8rem;
}
.tags, .category {
  text-align: left;
  @media screen and (max-width: 400px) {
    font-size: 3vw;
    margin-left: 2vw;
  }
  @media screen and (max-width: 1300px) {
    font-size: 2vw;
  }
  font-size: 0.8rem
}
.side-menu-wrap {
  @media screen and (max-width: 1000px) {
    width: 8vw;
    height: 8vw;
    margin-top: 1vw;
    margin-left: 1vw;
  }
  position: fixed;
  width: 28vw;
  height: 100vh;
  left: 0;
}
.side-menu {
  @media screen and (max-width: 1000px) {
    display: none; // スマホ用メニュー出来たら外す
  }
}
</style>
