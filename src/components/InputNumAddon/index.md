---
title: InputNumAddon
---

## InputNumAddon 组件

自定义 InputNumber 的前缀和后缀。

```jsx
import React from 'react';
import { InputNumAddon } from 'chili-lib';

export default () => {
  return <InputNumAddon addonBefore="输入" addonAfter="元" width="200px" />;
};
```

## api

| 参数        | 说明               | 类型                | 默认值 |
| :---------- | :----------------- | :------------------ | :----- |
| addonBefore | InputNumber 的前缀 | string \| ReactNode | -      |
| addonBefore | InputNumber 的后缀 | string \| ReactNode | -      |
| width       | InputNumber 宽度   | string              | -      |
