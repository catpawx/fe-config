<h1 align="center">Prettier Config Preset</h1>

<div align="center">
🐾 猫爪联盟前端团队 prettier 规则
</div>

[prettier-config-preset]: https://www.npmjs.com/package/@catpawx/prettier-config-preset

<div align="center">

[![](https://img.shields.io/npm/v/@catpawx/prettier-config-preset)][prettier-config-preset]
[![](https://img.shields.io/npm/dm/@catpawx/prettier-config-preset.svg)][prettier-config-preset]

</div>

## 使用方式

```bash
pnpm add -D @catpawx/prettier-config-preset
```

1. 第一种方式 添加 .prettierrc.js

```js
module.exports = {
  ...require('@catpawx/prettier-config-preset'),
  // 自定义你的规则
  semi: true,
}
```

2.  第二种方式 修改 package.json

```json
{
  "prettier": "@catpawx/prettier-config-preset"
}
```
