<template>
  <div class="share-button-wrap">
    <div class="clip-icon">
      <a
        :href="'https://twitter.com/share?url='+url+'&via=did0es&text='+title"
        target="_blank"
      >
        <FontAwesomeIcon :icon="twitter" class="icon twitter" />
      </a>
    </div>
    <div class="clip-icon">
      <div
        data-href="https://blog.did0es.me/"
        data-layout="button_count"
        data-size="small"
        data-lang="en"
      >
        <a
          target="_blank"
          :href="'https://www.facebook.com/sharer/sharer.php?u='+url+'%2F&amp;src=sdkpreparse'"
          class="fb-xfbml-parse-ignore">
          <FontAwesomeIcon :icon="facebook" class="icon facebook" />
        </a>
      </div>
    </div>
    <div class="clip-icon">
      <a
        :href="'http://b.hatena.ne.jp/add?mode=confirm&url='+url+'&title='+title"
        target="_blank"
        rel="nofollow"
      >
        <img src="~/assets/svg/hatenabookmark-logomark.svg" class="icon" style="width: 38px; height: 38px;">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  faTwitterSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default Vue.extend({
  components: {
    FontAwesomeIcon
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    url: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      twitter: faTwitterSquare,
      facebook: faFacebookSquare
    }
  }
})
</script>

<style lang="scss" scoped>
.share-button-wrap {
  display: flex;
  margin: 12px 0;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 42px;
  height: 42px;
}
.clip-icon {
  margin: 0 8px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
}
.twitter {
  color: rgb(25, 146, 221);
  background: #fff;
}
.facebook {
  color: rgb(57, 84, 153);
  background: #fff;
}
</style>
