<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: rgba(80, 40, 40, 1);
}

.markdown-body {
  color: rgba(80, 40, 40, 1);
}

.markdown-body a {
  color: rgb(120, 40, 40);
  transition: color .2s;
}

.markdown-body a:hover {
  color: rgb(209, 168, 175);
}

.markdown-body pre {
  background-color: #322931;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
