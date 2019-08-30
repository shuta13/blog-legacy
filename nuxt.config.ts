import path from 'path'
import NuxtConfiguration from '@nuxt/config'
import contents from './src/contents/json/contents.json'

const config: NuxtConfiguration = {
  mode: 'universal',
  srcDir: 'src/',
  optimizedImages: {
    optimizedImages: true
  },
  // css: ['minireset.css'], // mdの変換がうまくいかないため
  // manifest: {
  //   lang: 'ja',
  //   name: 'did0es.blog.me',
  //   short_name: 'did0es-blog',
  //   description: '@did0esのblog',
  //   orientation: 'portrait'
  // },
  head: {
    titleTemplate: '%s - blog.did0es.me',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chakra+Petch&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: 'https://gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@did0es' },
      { name: 'twitter:creator', content: '@did0es' }
    ]
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'highlight.js/styles/hopscotch.css',
    'github-markdown-css/github-markdown.css'
  ],
  plugins: [
    { src: '~plugins/font-awesome', ssr: false }
  ],
  build: {
    cache: true
  },
  modules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-145474468-1'
  },
  generate: {
    fallback: true,
    routes () {
      return Object.values(contents.fileMap)
        .map((params) => {
          const { base, ext } = params
          return `posts/${path.basename(base, ext)}`
        }), // eslint-disable-line
      Object.values(contents.fileMap)
        .map((params) => {
          const { category } = params
          return `posts/archives/${path.basename(category)}`
        })
    }
  }
}
export default config
