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
    fallback: true,
    routes() {
			return Object.values(contents.fileMap)
				.map(params => {
					const { base, ext } = params
					return `posts/${path.basename(base, ext)}`
				})
				.flat()
		}
  }
}
export default config