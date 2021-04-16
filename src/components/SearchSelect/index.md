---
title: SearchSelect
---

## SearchSelect 组件

基于[BaseSelect](https://chili.vercel.app/components/base-select)上，提供搜索和远程数据结合。

<code src="../../demos/SeachSelect.tsx" />

## api

| 参数         | 说明                                                                               | 类型     | 默认值 |
| :----------- | :--------------------------------------------------------------------------------- | :------- | :----- |
| url          | 搜索查询接口                                                                       | string   | -      |
| searchKey    | 查询字段                                                                           | string   | -      |
| dataObjKey   | 返回结果对象中获取 list 的 key                                                     | string   | -      |
| dataFormat   | 数据转换对象, 同 [BaseSelect](https://chili.vercel.app/components/base-select#api) | object   | -      |
| initNotFetch | 组件初始化不请求，默认请求，设置 true 不请求                                       | boolean  | -      |
| wait         | debounce 函数时间，单位毫秒                                                        | number   | 200    |
| onError      | 异常时回调函数                                                                     | function | -      |
