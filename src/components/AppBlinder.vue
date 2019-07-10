<template lang="pug">
  .blind-small-screen
      .notion ERROR:大きなサイズの画面にてご覧ください。
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.blind-small-screen {
  @media screen and (min-width: 300px) {
    display: none;
  }
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notion {
  color: #fff;
  font-size: 0.1rem;
}
</style>
