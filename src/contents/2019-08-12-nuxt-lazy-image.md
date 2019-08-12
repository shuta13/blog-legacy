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

＊＊＊

### v-lazy-image

> 👉 <a target="_blank" href="https://github.com/alexjoverm/v-lazy-image">github</a>

> 👉 <a target="_blank" href="https://www.npmjs.com/package/v-lazy-image">npm</a>

### 導入(Nuxt.js)

1. インストール

```shell
yarn add v-lazy-image
```

 *みんなyarn使っとる、npm cli なんか使っとるの、お前だけ*

2. 下ごしらえ

まあ <a target="_blank" href="https://github.com/alexjoverm/v-lazy-image/blob/master/README.md">公式のREADME</a> 見ればわかるんですが一応。

- どこからでも使いたいとき

`vue-lazy-image.js`みたいなファイルを用意してその中に以下を記述

```javascript
import Vue from "vue"
import { VLazyImagePlugin } from "v-lazy-image"

Vue.use(VLazyImagePlugin)
```

- その場でのみ使う

```javascript
import VLazyImage from "v-lazy-image"

export default {
  components: {
    VLazyImage
  }
}
```

あとは`template`タグの中でこんな感じに書けば使える

```html
<template>
  <v-lazy-image src="https://did0es.me/hoge.jpg">
</template>
```
