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
  manifest: {
    lang: 'ja',
    name: 'did0es.blog.me',
    short_name: 'did0es-blog',
    description: '@did0esのblog',
    orientation: 'portrait'
  },
  head: {
    titleTemplate: '%s - did0es.blog.me',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chakra+Petch&display=swap' }
    ],
    meta: [
      // { hid: 'og:image', property: 'og:image', content: 'https://did0es-blog.netlify.com/2019-07-09-promare-movie.jpg' },
      // ogImage: 'https://gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80',
      // twitterCard: 'summary',
      // twitterSite: '@did0es',
      // twitterCreator: '@did0es'
      // { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@did0es' },
    ],
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    { src: '~plugins/font-awesome', ssr: false }
  ],
  build: {
    cache: true
  },
  generate: {
    fallback: true
  }
}
export default config