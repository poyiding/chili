export default {
  esm: 'babel',
  cjs: 'babel',
  cssModules: true,
  disableTypeCheck: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
