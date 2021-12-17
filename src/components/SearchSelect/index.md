---
title: SearchSelect
---

## SearchSelect 组件

搜索和远程数据结合。

<code src="../../demos/SeachSelect.tsx" />

## api

| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| request | 异步请求获取 | ()=>Promise<{label: string, value: string }[]> | - |
| initNotFetch | 组件初始化不请求，默认请求，设置 true 不请求 | boolean | - |
| wait | debounce 函数时间，单位毫秒 | number | 200 |
