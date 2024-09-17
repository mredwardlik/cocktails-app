module.exports = {
  '*': "prettier '**/*' --write --ignore-unknown",
  '*.{js,ts,vue}': 'eslint --fix .',
  '*.{ts,vue}': () => 'vue-tsc',
  '*.{vue,css,scss}': 'stylelint --fix --allow-empty-input',
}
