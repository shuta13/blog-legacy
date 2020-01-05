<template lang="pug">
  .side-menu
    .contents-wrap
      .menu-contents
        p.category CATEGORY

        nuxt-link(to="/posts/archives/diary").item-wrap.diary
          .item #diary
          .number {{ numDiary }}

        nuxt-link(to="/posts/archives/other").item-wrap.other
          .item #other
          .number {{ numOther }}

        nuxt-link(to="/posts/archives/develop").item-wrap.develop
          .item #develop
          .number {{ numDevelop }}

    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v4.0"></script>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import contents from '../contents/json/contents.json'
@Component({})
class SideMenu extends Vue {
  @Provide()
  categorys = {}

  numDiary = 0
  numOther = 0
  numDevelop = 0

  mounted () {
    this.categorys = Object.values(contents.fileMap)
      .map((params) => {
        return params.category
      })
    this.countCategory()
  }
  countCategory () {
    for (let i = 0; i < Object.keys(this.categorys).length; i++) {
      if (this.categorys[i] === 'diary') { this.numDiary++ }
      if (this.categorys[i] === 'other') { this.numOther++ }
      if (this.categorys[i] === 'develop') { this.numDevelop++ }
    }
  }
}
export default SideMenu
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  color: rgb(114, 63, 63);
}
img {
  width: 40px;
  height: 40px;
}
.side-menu {
  width: 24vw;
  height: 100vh;
  background-color: #455870;
  display: flex;
}
.contents-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-contents {
  width: 10vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // line-height: 3rem;
}
.category {
  font-family: 'Chakra Petch';
  font-size: 36px;
  // margin-top: -10vh;
  // margin-bottom: 20px;
}
.item-wrap {
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.6));
  height: 32px;
  padding: 8px 8px;
  margin-top: 8px;
  border-radius: 20px;
  font-family: 'Cutive Mono';
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.item-wrap:hover {
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6));
}
.item {
  font-size: 18px;
  text-align: center;
  margin-right: 10px;
}
.number {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: solid 1px #fff;
  border-radius: 10px;
}
.other {
  background-color: rgb(196, 151, 151);
}
.develop {
  background-color: rgb(127, 189, 127);
}
.diary {
  background-color: rgb(120, 141, 184);
}
</style>
