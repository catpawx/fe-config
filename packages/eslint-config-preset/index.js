'use strict'
module.exports = {
  env: {
    browser: true, // 启用浏览器全局变量
    es6: true, // 启用 ES6 全局变量
    node: true, // 启用 Node.js 全局变量
    jest: true, // 启用 Jest 测试环境全局变量
  },
  extends: [
    'standard',
    'standard-jsx',
    'prettier',
    'plugin:prettier/recommended',
  ], // 继承标准规则、JSX 规则、Prettier 规则
  globals: {
    Atomics: 'readonly', // 定义全局只读的 Atomics 变量
    SharedArrayBuffer: 'readonly', // 定义全局只读的 SharedArrayBuffer 变量
  },
  parser: '@babel/eslint-parser', // 使用 Babel 解析器
  parserOptions: {
    requireConfigFile: false, // 不检测
    ecmaFeatures: {
      jsx: true, // 启用 JSX 支持
    },
    ecmaVersion: 2018, // 设置 ECMAScript 版本为 2018
    sourceType: 'module', // 设置源代码类型为模块
  },
  plugins: ['prettier', 'unicorn', 'simple-import-sort'], // 加载 Prettier 和 Unicorn 插件
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error', // 使用 Prettier 进行代码格式化
    'standard/no-callback-literal': 'off', // 允许在回调函数中使用字面量
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase', // 强制文件名使用 kebab-case 命名风格
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ], // 强制使用单引号，禁止使用模板字符串
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // 启用 JSX 支持
        },
        warnOnUnsupportedTypeScriptVersion: true, // 如果 TypeScript 版本不受支持，则发出警告
      },
      extends: [
        'standard',
        'standard-jsx',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
      ], // 继承标准规则、JSX 规则、Prettier 规则和 TypeScript 规则
      plugins: ['prettier', 'unicorn', '@typescript-eslint'], // 加载 Prettier、Unicorn 和 TypeScript 插件
      rules: {
        'max-lines': [
          'error',
          {
            max: 400,
            skipBlankLines: true,
            skipComments: true,
          },
        ], // 限制每个文件最大行数不超过400行
        'default-case': 'off', // 关闭默认的 switch 语句的 case 缺失警告
        'no-dupe-class-members': 'off', // 关闭重复类成员定义的警告
        '@typescript-eslint/consistent-type-assertions': 'warn', // 强制一致的类型断言风格
        'no-array-constructor': 'off', // 关闭使用 Array 构造函数的警告
        '@typescript-eslint/no-array-constructor': 'warn', // 使用 TypeScript 规则检查禁止使用 Array 构造函数
        '@typescript-eslint/no-namespace': 'error', // 禁止使用命名空间
        'no-use-before-define': 'off', // 关闭变量在定义之前使用的警告
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ], // 使用 TypeScript 规则检查禁止在定义之前使用变量
        'no-unused-vars': 'off', // 关闭未使用变量的警告
        '@typescript-eslint/no-unused-vars': [
          'error',
          { vars: 'all', argsIgnorePattern: '^_' },
        ], // 使用 TypeScript 规则检查未使用的变量
        'no-useless-constructor': 'off', // 关闭无用的构造函数的警告
        '@typescript-eslint/no-useless-constructor': 'warn', // 使用 TypeScript 规则检查无用的构造函数
        'prettier/prettier': 'error', // 使用 Prettier 进行代码格式化
        'standard/no-callback-literal': 'off', // 允许在回调函数中使用字面量
        '@typescript-eslint/explicit-function-return-type': 'off', // 关闭要求显式函数返回类型的警告
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭要求显式模块边界类型的警告
        '@typescript-eslint/member-delimiter-style': 'off', // 关闭强制成员分隔符样式的警告
        '@typescript-eslint/no-explicit-any': 'off', // 关闭禁止使用 any 类型的警告
        'unicorn/filename-case': 'off', // 关闭文件夹校验规则
        quotes: 'off', // 关闭引号使用的警告
        '@typescript-eslint/quotes': [
          'error',
          'single',
          {
            avoidEscape: true,
            allowTemplateLiterals: false,
          },
        ], // 使用 TypeScript 规则强制使用单引号，禁止使用模板字符串
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ], // ts类型大驼峰命名校验
        '@typescript-eslint/consistent-type-imports': 'error', // import ts类型需要加type
      },
    },
  ],
}
