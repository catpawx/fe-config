// .commitlintrc.js
const { defineConfig } = require('@catpawx/commitlint-config-preset')

// const scopes = [
//   {
//     value: 'eslint-config-preset',
//     name: 'eslint-config-preset                   eslint 预制规则',
//   },
//   {
//     value: 'eslint-config-preset2',
//     name: 'eslint-config-preset2                   eslint 预制规则',
//   },
// ]
// const scopes = ['eslint-config-preset', 'eslint-config-preset2']

const fs = require('node:fs')
const path = require('node:path')

const scopes = fs.readdirSync(path.resolve(__dirname, 'packages'))

module.exports = defineConfig({
  prompt: {
    scopes,
    enableMultipleScopes: true,
  },
})
