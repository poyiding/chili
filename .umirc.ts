import { defineConfig } from 'dumi';

// more config: https://d.umijs.org/config
export default defineConfig({
  title: 'chili-lib',
  description: '基于antd封装的组件和工具库',
  favicon: '/chili.jpeg',
  logo: '/chili.jpeg',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
