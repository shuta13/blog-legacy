import NuxtConfiguration from '@nuxt/config'
const config: NuxtConfiguration = {
  mode: 'universal',
  optimizedImages: {
    optimizedImages: true
  },
  css: ['minireset.css'],
  manifest: {
    lang: 'ja',
    name: 'did0es.blog.me',
    description: 'blog',
    orientation: 'portrait'
  },
  head: {
    titleTemplate: '%s - did0es.blog.me'
  },
  meta: {
    ogImage: 'https://s.gravatar.com/avatar/5297a6f1a0d91b1ef43b75b2915a0628?s=80',
    twitterSite: '@did0es',
    twitterCreator: '@did0es'
  },
  build: {
    cache: true
  },
  generate: {
    fallback: true
  }
}
export default config