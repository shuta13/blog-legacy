---
title: Nuxt + v-lazy-imageで楽に画像遅延読み込み
created_at: 2019-08-12
tags: 
 - web
 - vue/nuxt
 - plugin
category: develop
---

*画像遅延読み込み on Nuxt(Vue) をしたい！しないとオワになっちまう！！ア゛！！！* という感じのとき（私は違いますが...）に、それをいい感じにやってくれるpluginの紹介です

<br>

## v-lazy-image

<br>

> 👉 <a target="_blank" href="https://github.com/alexjoverm/v-lazy-image">github</a>

> 👉 <a target="_blank" href="https://www.npmjs.com/package/v-lazy-image">npm</a>

<br>

なんか、<a target="_blank" href="">vue-lazyload</a>を勧めてくる方もいるんですが、僕はこっちの方がよりシンプルでわかりやすかったので `v-lazy-image` を使っています

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

今回は `Nuxt.js` での場合を想定して進めていきます

<br>

- どこからでも使いたいとき

`plugin/` に `vue-lazy-image.js` みたいな名前のファイルを用意してその中に以下を記述

```javascript
import Vue from "vue"
import { VLazyImagePlugin } from "v-lazy-image"

Vue.use(VLazyImagePlugin)
```

`nuxt.config.js` に以下を追加

```javascript
// ~
plugins: [
    '~/plugins/v-lazy-image'
]
// ~
```

<br>

- その場でのみ使う

`v-lazy-image` を使いたいsfcの `script` タグ内に以下を記述

```javascript
import VLazyImage from "v-lazy-image"

export default {
  components: {
    VLazyImage
  }
}
```

<br>

3. **つかう**

あとは `template` タグの中でこんな感じに書けば使える

```html
<template>
  <v-lazy-image src="https://did0es.me/images/hoge.jpg">
</template>
```

<br>

ただのコンポーネントと同じ感じの扱いです、簡単さはうれしさ

<br>

### アレコレ機能

これが本命な感じなのですが、遅延読み込みした画像に対して簡単にstyleで諸々エフェクト的なのが付けられます

<br>

`v-lazy-image` タグで囲うと以下

```css
.v-lazy-image
.v-lazy-image-loaded
```

の2クラスが追加されます。

<br>

`.v-lazy-image` は画像が読み込まれる前、 `v-lazy-image-loaded` は読み込まれた後、見たまんまです

<br>

 `transition` とかと組み合わせるといい感じにこの間を補完できます(アニメーションがついてうれしくなります)

僕はこんな感じにして使っていました

```css
.v-lazy-image {
  opacity: 0;
  transition: opacity .4s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
```

非常に単純なんですが結構いい感じに画像が表示されるようになります

<br>

### 所感

- `v-lazy-image` タグで表示したい画像は `src=""` で読み込んであげないとアになってしまう
  - `:style="{'background': 'url(/images/hoge.jpg)'}"` では `src`が無いんだよこのカス！ って怒られが発生します(した)

<br>

- 結局、 `v-lazy-image` だと楽に僕がやりたかったことができて *LOVE...* となったけど `vue-lazyload` が使いこなせてなかっただけかもしれません
  - こっちの方がいいぞ とか `vue-lazyload` はもっとこんなことができるよ 的なのがあったら是非教えて下さい( 石を投げる的→<a target="_blank" href="https://twitter.com/did0es">@did0es</a> )

<br>
