---
title: v-lazy-imageがよさげだった
created_at: 2019-08-12
tags: 
 - web
 - vue
 - nuxt
 - plugin
category: develop
---

*画像遅延読み込み on Nuxt(Vue) をしたい！しないとオワになっちまう！！ア゛！！！* という感じのとき（私はありませんが...）に、それをいい感じにやってくれるpluginがあるのでそれのご紹介です

<br>

＊＊＊

<br>

### v-lazy-image

> 👉 <a target="_blank" href="https://github.com/alexjoverm/v-lazy-image">github</a>

> 👉 <a target="_blank" href="https://www.npmjs.com/package/v-lazy-image">npm</a>

なんか、<a target="_blank" href="">vue-lazyload</a>を勧めてくる方もいるんですが僕はこっちの方がシンプルでわかりやすかった(後述)なので`v-lazy-image`を使っています

<br>

＊＊＊

<br>

### 導入

1. **インストール**

```bash
yarn add v-lazy-image
```

<br>

>>> POINT 👉 *みんな yarn 使っとる、npm なんか使っとるの、お前だけ*

<br>

2. **下ごしらえ**

<a target="_blank" href="https://github.com/alexjoverm/v-lazy-image/blob/master/README.md">公式のREADME</a> 見ればわかるんですが一応。

今回はNuxt.js での場合を想定して進めていきます

- どこからでも使いたいとき

- `plugin/` に `vue-lazy-image.js` みたいな名前のファイルを用意してその中に以下を記述

```javascript
import Vue from "vue"
import { VLazyImagePlugin } from "v-lazy-image"

Vue.use(VLazyImagePlugin)
```

- `nuxt.config.js` に以下を追加

```javascript
// ~
plugins: [
    '~/plugins/v-lazy-image'
]
// ~
```

- その場でのみ使う

以下をv-lazy-imageを使いたいsfcの`script`タグ内で記述

```javascript
import VLazyImage from "v-lazy-image"

export default {
  components: {
    VLazyImage
  }
}
```

3. **つかう**

あとは`template`タグの中でこんな感じに書けば使える

```html
<template>
  <v-lazy-image src="https://did0es.me/hoge.jpg">
</template>
```

ただのコンポーネントとしてやるだけです、簡単

### アレコレ機能