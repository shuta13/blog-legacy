<template>
  <div class="bar-wrap">
    <nuxt-link to="/" class="top-bar">
      did0es.blog
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend()
</script>

<style lang="scss" scoped>
.bar-wrap {
  position: absolute;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.top-bar {
  text-decoration: none;
  font-family: 'Chakra Petch';
  font-size: 40px;
  color: #313131;
}
</style>
