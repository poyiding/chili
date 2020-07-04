---
title: formateMoney
---

### formatMoney

金额进行格式化，例如：

```
12       --> "12"
1234567  --> "1,234,567"
12345.67 --> "12,345.67"

```

## 使用

```js
import { formatMoney } from 'chili-lib';

const money = formatMoney(12345.67);
```

### 参数

| 参数  | 说明             | 类型                   | 默认值 |
| :---- | :--------------- | :--------------------- | :----- |
| money | 需要格式化的金额 | number \| numberSrting | -      |
