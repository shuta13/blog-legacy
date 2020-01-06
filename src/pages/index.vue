<template lang="pug">
  .container
    app-title

      .share-button-wrap
        <a href="https://twitter.com/share?url=https%3A%2F%2Fblog.did0es.me&via=did0es&text=did0esのblog" target="_blank"><FontAwesomeIcon :icon="twitter" class="icon twitter"></FontAwesomeIcon></a>
        <div data-href="https://blog.did0es.me/" data-layout="button_count" data-size="small" data-lang="en"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.did0es.me%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><FontAwesomeIcon :icon="facebook" class="icon facebook"></FontAwesomeIcon></a></div>
        <a href="http://b.hatena.ne.jp/add?mode=confirm&url=https://blog.did0es.me&title=did0es.blog%20-%20blog.did0es.me" target="_blank" rel="nofollow"><img src="~/assets/svg/hatenabookmark-logomark.svg" class="icon" style="width: 38px; height: 38px;"></a>

    .item-wrap
      div(v-for="data in fileData" :key="data[1].title")
        nuxt-link(:to="`/posts/${data[1].base.split(/.json/)[0]}`")
          .item
            .title-wrap
              .title {{ data[1].title }}
            .meta-wrap
              .tags-wrap tag
                .tags(v-for="tag in data[1].tags") {{ tag }}
              .category-wrap category
                nuxt-link(:to="`/posts/archives/${data[1].category}`").category.develop {{ data[1].category }}
              .date-wrap date
                .date {{ data[1].created_at.split(/T/)[0] }}

    .side-menu-wrap
      side-menu.side-menu
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import {
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import contents from '../contents/json/contents.json'
import SideMenu from '~/components/SideMenu.vue'
import AppTitle from '~/components/AppTitle.vue'

@Component({
  components: {
    FontAwesomeIcon,
    SideMenu,
    AppTitle
  }
})
class Home extends Vue {
  @Provide()

  twitter = faTwitterSquare
  facebook = faFacebookSquare

  files = contents.fileMap
  fileData: Array<{}> | null = null

  head () {
    return {
      title: 'did0es.blog',
      meta: [
        { hid: 'description', property: 'description', content: '@did0esのブログ' },
        { hid: 'og:description', property: 'og:description', content: '@did0esのブログ' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://blog.did0es.me' },
        { hid: 'og:title', property: 'og:title', content: 'did0es.blog' }
      ]
    }
  }

  mounted () {
    this.setFileContents()
  }

  setFileContents () {
    this.fileData = Object.entries(this.files)
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
  color: #fff;
}
.share-button-wrap {
  @media screen and (min-width: 769px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  margin: 0 8px;
  font-size: 120%;
  width: 42px;
  height: 42px;
}
.twitter {
  color: rgb(25, 146, 221);
}
.facebook {
  color: rgb(57, 84, 153);
}
.meta-wrap {
  font-family: 'Chakra Petch';
  display: flex;
  justify-content: center;
}
.item-wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 36px;
}
.item {
  background-color: rgb(247, 244, 245);
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
.title-wrap {
  width: 100%;
  height: auto;
  background-color: #455870;
  margin-bottom: 10px;
  filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.2));
}
.title {
  left: 0;
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.date-wrap {
  text-align: right;
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
  border: solid 1px #313131;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 64px;
  height: auto;
  padding: 2px 2px;
  color: #313131;
}
.date {
  width: 90px;
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
