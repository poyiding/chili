export default {
  esm: 'babel',
  cjs: 'babel',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
