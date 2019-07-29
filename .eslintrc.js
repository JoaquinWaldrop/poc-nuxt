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
    'prettier',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    "plugin:vue/recommended",
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  plugins: [
    'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off"
  },
  globals: {
    $nuxt: true
  }
}
