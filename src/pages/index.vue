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
    meta: [
      { hid: 'og:image', property: 'og:image', content: 'https://did0es-blog.netlify.com/posts/2019-07-09-promare-movie.jpg' }
    ]
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
  @media screen and (max-width: 1000px) {
    font-size: 12vw;
  }
  font-size: 2.4rem;
}
.link-wrap {
  background-color: rgb(255, 240, 240);
  @media screen and (max-width: 1000px) {
    width: 80vw;
    height: 20vh;
    border-radius: 20px;
  }
  width: 20vw;
  margin-top: 10vh;
  border-radius: 3px;
}
.title {
  @media screen and (max-width: 1000px) {
    font-size: 6vw;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  font-size: 1rem;
  margin: 0.4rem 0.4rem;
}
.date {
  text-align: right;
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
  }
  font-size: 0.8rem;
}
.tags, .category {
  text-align: left;
  @media screen and (max-width: 1000px) {
    font-size: 3vw;
    margin-left: 2vw;
  }
  font-size: 0.8rem
}
</style>
