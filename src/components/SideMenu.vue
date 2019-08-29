<template lang="pug">
  .side-menu
    .contents-wrap
      .menu-contents
        p.category CATEGORY

        a(href="/posts/archives/diary").item-wrap.diary
          .item #diary
          .number {{ numDiary }}

        a(href="/posts/archives/other").item-wrap.other
          .item #other
          .number {{ numOther }}

        a(href="/posts/archives/develop").item-wrap.develop
          .item #develop
          .number {{ numDevelop }}

</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import contents from '../contents/json/contents.json'
@Component
class SideMenu extends Vue {
  @Provide()
  categorys = {}

  numDiary = 0
  numOther = 0
  numDevelop = 0

  mounted() {
    this.categorys = Object.values(contents.fileMap)
      .map(params => {
        return params.category
      })
    this.countCategory()
  }
  countCategory() {
    for (let i = 0; i < Object.keys(this.categorys).length; i++) {
      if (this.categorys[i] === 'diary') this.numDiary++
      if (this.categorys[i] === 'other') this.numOther++
      if (this.categorys[i] === 'develop') this.numDevelop++
    }
  }
}
export default SideMenu
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
}
a:hover {
  color: rgba(0, 0, 0, 1);
}
.side-menu {
  width: 24vw;
  height: 100vh;
  background-color: rgba(206, 153, 163, 0.8);
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
  line-height: 3rem;
}
.category {
  font-family: 'Chakra Petch';
  font-size: 36px;
  margin-top: -10vh;
  margin-bottom: 20px;
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
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: solid 1px rgba(0, 0, 0, .4);
  border-radius: 10px;
}
.other {
  background-color: rgba(220, 220, 220, 1);
}
.develop {
  background-color: rgba(180, 220, 180, 1);
}
.diary {
  background-color: rgb(169, 183, 212);
}
</style>
