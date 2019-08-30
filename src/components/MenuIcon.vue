<template lang="pug">
  .hamburger-icon
    .bar1
    .bar2
    .bar3
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
class MenuIcon extends Vue {}
export default MenuIcon
</script>

<style lang="scss" scoped>
.hamburger-icon {
  display: inline-block;
  cursor: pointer;
  top: 0;
  left: 0;
  position: absolute;
  width: 32px;
  height: 32px;
  margin-top: 24px;
  margin-left: 16px;
}

.bar1, .bar2, .bar3 {
  background-color: #fff;
  width: 32px;
  height: 4px;
  margin: 6px 0;
  transition: .4s;
  border-radius: 2px;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 8px);
  transform: rotate(-45deg) translate(-6px, 8px);
  width: 40px;
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -8px);
  transform: rotate(45deg) translate(-6px, -8px);
  width: 40px;
}
</style>
