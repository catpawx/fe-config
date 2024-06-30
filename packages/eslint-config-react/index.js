// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
'use strict'
const reactRules = {
  'jsx-quotes': ['error', 'prefer-double'], // 在 JSX 属性中强制使用双引号
  'react-hooks/rules-of-hooks': 'error', // 检查使用 React Hooks 的规则，确保其正确使用
  'react-hooks/exhaustive-deps': 'warn', // 检查 React Hooks 的依赖项数组是否包含了所有的依赖
  'react/jsx-curly-newline': 'off', // 不强制要求 JSX 中的大括号换行
  'react/jsx-indent': 'off', // 不强制要求 JSX 的缩进
  'react/jsx-handler-names': 'off', // 不强制要求给 JSX 事件处理函数命名的规则
  'react/react-in-jsx-scope': 'off', // 不要求在 JSX 文件中显式导入 React
}

module.exports = {
  extends: ['@catpawx/eslint-config-preset', 'standard-react'], // 继承标准规则、React 规则
  plugins: ['react', 'react-hooks'], // 加载 React、React Hooks
  rules: {
    ...reactRules, // 合并 React 相关的规则
  },
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
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
      extends: ['standard-react'], // React 规则
      plugins: ['react', 'react-hooks'], // 加载 React、React Hooks
      rules: {
        'react/prop-types': 'off', // 关闭 PropTypes 的警告
        ...reactRules, // 合并 React 相关的规则
      },
    },
  ],
}
