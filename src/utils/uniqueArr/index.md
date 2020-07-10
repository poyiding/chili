---
title: uniqueArr
---

### uniqueArr

数组去重

### 使用

基本使用

```js
import { uniqueArr } from 'chili-lib';

uniqueArr([1, 3, '1', '1', 2, 5, 2]);
// [1, 3, '1', 2, 5]
```

如果数组中的元素是对象

```js
import { uniqueArr } from 'chili-lib';

const { uniqueBy } = uniqueArr;
uniqueBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x');
// [{ x: 1 }, { x: 2 }]
```
