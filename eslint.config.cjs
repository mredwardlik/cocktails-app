const js = require('@eslint/js')
const ts = require('typescript-eslint')
const eslintPluginVue = require('eslint-plugin-vue')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  ...ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...eslintPluginVue.configs['flat/recommended'],
    {
      rules: {
        'vue/multi-word-component-names': ['error', { ignores: ['index'] }],
      },
    },
    {
      files: ['*.vue', '**/*.vue'],
      languageOptions: {
        parserOptions: {
          parser: '@typescript-eslint/parser',
        },
      },
    },
  ),
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'eslint.config.cjs',
      '.lintstagedrc.cjs',
      '.prettierrc.cjs',
      '.stylelintrc.cjs',
    ],
  },
]
