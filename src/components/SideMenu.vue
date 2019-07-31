<template lang="pug">
  .side-menu
    .contents-wrap
      .menu-contents
        p.category CATEGORY
        a(href="/posts/other").item-wrap
          .item #other
          .number {{ numOther }}
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'nuxt-property-decorator'
import contents from '../contents/json/contents.json'
@Component
class SideMenu extends Vue {
  @Provide()
  categorys = {}
  numOther = 0

  mounted() {
    this.categorys = Object.values(contents.fileMap)
      .map(params => {
        return params.category
      })
    this.countCategory()
  }
  countCategory() {
    for (let i = 0; i < Object.keys(this.categorys).length; i++) {
      if (this.categorys[i] === 'other') this.numOther++
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
  background-color: rgba(195, 190, 210, .8);
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
  height: 40px;
  padding: 8px 8px;
  border-radius: 20px;
  background-color: #fff;
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
  font-size: 24px;
  text-align: center;
  margin-right: 10px;
}
.number{
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: solid 1px rgba(0, 0, 0, .4);
  border-radius: 10px;
}
</style>
