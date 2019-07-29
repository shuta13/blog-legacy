import NuxtConfiguration from '@nuxt/config'

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
    titleTemplate: '%s - did0es.blog.me',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Chakra+Petch&display=swap' }
    ],
    meta: [
      { charset: 'utf-8' },
      { hid: 'og:image', property: 'og:image', content: 'https://gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@did0es' },
      { name: 'twitter:creator', content: '@did0es' }
    ]
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
