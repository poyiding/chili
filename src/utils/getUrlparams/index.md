---
title: getUrlParams
---

### getUrlParams

获取 url 的参数，返回参数对象。

### 使用

```js
import { getUrlParams } from 'chili-lib';

const paramsObj = getUrlParams();
```

### 参数

| 参数 | 说明                                                  | 类型   | 默认值 |
| :--- | :---------------------------------------------------- | :----- | :----- |
| url  | 需要获取参数的 url，不传默认从 window.location 中获取 | srting | -      |
