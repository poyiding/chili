---
title: BaseSelect
---

## BaseSelect 组件

对 Antd Select 组件扩展

场景一：数据为枚举对象

```jsx
import React from 'react';
import { BaseSelect } from 'chili-lib';

export default () => {
  const data = {
    zhangsan: '张三',
    zhaosi: '赵四',
  };

  return <BaseSelect style={{ width: 120 }} defaultValue="zhangsan" data={data} />;
};
```

场景二：数据为数组，需要 dataFormat 转换

```jsx
import React from 'react';
import { BaseSelect } from 'chili-lib';

export default () => {
  const data = [
    { code: 324242, name: '张三' },
    { code: 243535, name: '李四' },
  ];
  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <BaseSelect
      data={data}
      onChange={handleChange}
      style={{ width: 120 }}
      dataFormat={{ key: 'code', value: 'name' }}
    />
  );
};
```

场景三：数据通过 request 请求异步获取

<code src="../../demos/BaseSelect.tsx" />

## api

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| data | Select 的 Option 的 list 数据 | array \|\| 枚举对象 | [ ] |
| dataFormat | 数据为数组时，dataFormat 转换 key: value 形式 | {key: string, value: string} | - |
| request | 数据通过异步请求获取，data 和 request 同时存在时，会采用 request 返回数据 | ()=>Promise<{label,value}> | - |
