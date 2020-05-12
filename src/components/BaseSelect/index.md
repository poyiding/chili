---
title: BaseSelect 选择
---
## BaseSelect 组件

用法和antd的select 组件一样，BaseSelect可以自定义数据。

场景一：数据为枚举对象

```jsx
import React from 'react';
import { BaseSelect } from 'chili';

export default () => {
  const data = {
    zhangsan: '张三',
    zhaosi: '赵四',
  };

  return <BaseSelect style={{ width: 120 }} defaultValue="zhangsan" data={data}/>
}

```
场景二：数据为数组，需要dataFormat转换

```jsx
import React from 'react';
import { BaseSelect } from 'chili';

export default () => {
  const data = [
    { code: 324242, name: '张三'},
    { code: 243535, name: '李四'},
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
  )
}

```
