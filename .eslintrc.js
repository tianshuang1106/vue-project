module.exports = {
  // 当前eslintrc文件所在的位置，整个eslint的规则都会被限制在当前文件下
  root: true,
  // 启动的eslint检测的环境
  env: {
    // 在node环境下启动eslint检测
    node: true
  },
  // 基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    // 脚手架搭建时，选择了standard，eslint就会基于standard标准化配置进行配置
    '@vue/standard'
  ],
  // 解析器 要解析的内容
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要启用的规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
