export default {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'chili', // 暴露全局的name
    globals: {
      react: 'React',
      antd: 'antd',
    },
    file: 'chili',
  },
  extractCSS: true,
  disableTypeCheck: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
