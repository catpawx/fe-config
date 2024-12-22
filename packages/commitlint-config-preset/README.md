<h1 align="center">commitlint Config Preset</h1>

<div align="center">
🐾 猫爪联盟前端团队 commitlint 规则
</div>

[commitlint-config-preset]: https://www.npmjs.com/package/@catpawx/commitlint-config-preset

<div align="center">

[![](https://img.shields.io/npm/v/@catpawx/commitlint-config-preset)][commitlint-config-preset]
[![](https://img.shields.io/npm/dm/@catpawx/commitlint-config-preset.svg)][commitlint-config-preset]
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

</div>

## 使用方式

1. 安装依赖

```bash
pnpm add -D @catpawx/commitlint-config-preset cz-git @commitlint/cli commitizen
```

2. 配置 package.json

```json
{
  "scripts": {
    ....
    "commit": "git-cz"
    ....
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  },
}
```

3. 配置 .commitlintrc.js

- 如果是单体仓库

```js
const { defineConfig } = require('./commitlintrc.cjs')

// 其中defineConfig可以传递一个对象，对象中配置完全参考commitlint的配置，会将默认配置和传递的配置合并
module.exports = defineConfig()
```

- 如果是monorepo仓库，可以配置多个scope

```js
const { defineConfig } = require('./commitlintrc.cjs')

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
```

### 配合 husky 使用

pre-commit

```bash
# #!/bin/sh
# . "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged  --allow-empty
```

commit-msg

```bash
# #!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```
