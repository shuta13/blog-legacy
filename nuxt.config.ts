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
    description: 'blog',
    orientation: 'portrait'
  },
  head: {
    titleTemplate: '%s - did0es.blog.me',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chakra+Petch&display=swap' }
    ]
  },
  meta: [
    { hid: 'og:image', property: 'og:image', content: 'https://did0es-blog.netlify.com/2019-07-09-promare-movie.jpg' },
    { ogImage: 'https://s.gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80' },
    { twitterSite: '@did0es' },
    { twitterCreator: '@did0es' }
  ],
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