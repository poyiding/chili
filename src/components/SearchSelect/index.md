---
title: SearchSelect
---

## SearchSelect 组件

搜索和远程数据结合

<code src="../../demos/SeachSelect.tsx" />

## api

| 参数         | 说明                                                                               | 类型     | 默认值 |
| :----------- | :--------------------------------------------------------------------------------- | :------- | :----- |
| url          | 搜索查询接口                                                                       | string   | -      |
| searchKey    | 查询字段                                                                           | string   | -      |
| dataObjKey   | 返回结果对象中 list 的 key                                                         | string   | -      |
| dataFormat   | 数据转换对象, 同 [BaseSelect](https://chili.vercel.app/components/base-select#api) | object   | -      |
| initNotFetch | 初始化是组件否请求，                                                               | boolean  | -      |
| onError      | 异常时回调函数                                                                     | function | -      |
