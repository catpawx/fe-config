<h1 align="center">Prettier Config Preset</h1>

<div align="center">
🐾 猫爪联盟前端团队 prettier 规则
</div>

[prettier-config-preset]: https://www.npmjs.com/package/@catpawx/prettier-config-preset

<div align="center">

[![](https://img.shields.io/npm/v/@catpawx/prettier-config-preset)][prettier-config-preset]
[![](https://img.shields.io/npm/dm/@catpawx/prettier-config-preset.svg)][prettier-config-preset]
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

</div>

## 使用方式

```bash
yarn add @catpawx/prettier-config-preset --dev
```

### package.json

```json
{
  "prettier": "@catpawx/prettier-config-preset"
}
```

### .prettierrc.js

```js
module.exports = {
  ...require('@catpawx/prettier-config-preset'),
  semi: true,
}
```
