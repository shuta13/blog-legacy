<template lang="pug">
  .container
    .bar-wrap
      .top-bar # {{ path }}

    .item-wrap
      div(v-for="data in fileData" :key="data" v-if="path===data[1].category")
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
import contents from '../../../contents/json/contents.json'
import SideMenu from '~/components/SideMenu.vue'

@Component({
  components: {
    SideMenu
  }
})
class Home extends Vue {
  @Provide()
  files = contents.fileMap
  fileData: Array<{}> | null = null
  path = ''

  head () {
    return {
      title: `${this.$route.path.split(/\//)[3]}`,
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
    this.path = this.$route.path.split(/\//)[3]
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
  color: rgba(80, 40, 40, 1);
}
.bar-wrap {
  position: absolute;
  width: 100vw;
  height: 10vh;
  text-align: center;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 6vh;
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
  background-color: rgba(230, 148, 163, 0.8);
  margin-bottom: 10px;
  filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
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
  border: solid 1px rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 64px;
  height: auto;
  padding: 2px 2px;
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
