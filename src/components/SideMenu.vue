<template lang="pug">
  .side-menu
    .contents-wrap
      .menu-contents
        .share-button-wrap
          <div class="clip-icon">
            <a href="https://twitter.com/share?url=https%3A%2F%2Fblog.did0es.me&via=did0es&text=did0esのblog" target="_blank"><FontAwesomeIcon :icon="twitter" class="icon twitter"></FontAwesomeIcon></a>
          </div>

          <div class="clip-icon">
            <div data-href="https://blog.did0es.me/" data-layout="button_count" data-size="small" data-lang="en"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblog.did0es.me%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><FontAwesomeIcon :icon="facebook" class="icon facebook"></FontAwesomeIcon></a></div>
          </div>

          <div class="clip-icon">
            <a href="http://b.hatena.ne.jp/add?mode=confirm&url=https://blog.did0es.me&title=did0es.blog%20-%20blog.did0es.me" target="_blank" rel="nofollow"><img src="~/assets/svg/hatenabookmark-logomark.svg" class="icon" style="width: 38px; height: 38px;"></a>
          </div>
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
import {
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import contents from '../contents/json/contents.json'
@Component({
  components: {
    FontAwesomeIcon
  }
})
class SideMenu extends Vue {
  @Provide()
  twitter = faTwitterSquare
  facebook = faFacebookSquare

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
.share-button-wrap {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 42px;
  height: 42px;
}
.clip-icon {
  margin: 0 8px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
}
.twitter {
  color: rgb(25, 146, 221);
  background: #fff;
}
.facebook {
  color: rgb(57, 84, 153);
  background: #fff;
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
