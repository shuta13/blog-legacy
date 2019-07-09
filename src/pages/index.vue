<template lang="pug">
  .container
    .bar-wrap
      .top-bar did0es.blog
    .link-wrap(@mouseover="itemHovered")(@mouseleave="itemLeft")
      nuxt-link(to="/posts/2019-07-09-promare-movie")
        .title {{ title20190709PromareMovie }}
        .meta-wrap
          .date 2019-07-09
          .tags(v-for="tag in tags20190709PromareMovie") - {{ tag }}
          .category - category : {{ category20190709PromareMovie }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TweenMax from 'gsap'
import JSON20190709PromareMovie from '../contents/json/2019-07-09-promare-movie.json'

@Component
export default class extends Vue {
  head() {
    return {
      title: 'home'
    }
  }
  title20190709PromareMovie = JSON20190709PromareMovie.title
  tags20190709PromareMovie = JSON20190709PromareMovie.tags
  category20190709PromareMovie = JSON20190709PromareMovie.category
  itemHovered() {
    // @ts-ignore
    TweenMax.to('.link-wrap', 0.8, {
      backgroundColor: 'rgb(255, 120, 120)'
    })
  }
  itemLeft() {
    // @ts-ignore
    TweenMax.to('.link-wrap', 0.8, {
      backgroundColor: 'rgb(255, 240, 240)'
    })
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html body {
  width: 100vw;
}
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  font-family: 'Roboto'
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
  font-size: 2.4rem;
}
.link-wrap {
  background-color: rgb(255, 240, 240);
  width: 20vw;
  margin-top: 10vh;
  border-radius: 3px;
}
.title {
  font-size: 1rem;
  margin: 0.4rem 0.4rem;
}
.date {
  text-align: right;
  font-size: 0.8rem;
}
.tag-title {
  font-size: 1rem;
}
.tags, .category {
  text-align: left;
  font-size: 0.8rem
}
</style>
