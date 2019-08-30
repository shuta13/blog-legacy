module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "no-extra-semi": "warn",
    "no-undef": "warn",
    "no-console": "off",
    "quotes": ["warn", "single"],
    "space-before-blocks": ["warn", { "classes": "always", "functions": "always", "keywords": "always" }]
  }
}
