---
title: debounce
---

### debounce

使用例子

```jsx
import React, { useRef } from 'react';
import { Input } from 'antd';
import { debounce } from 'chili-lib';

export default function Demo() {
  const consoleValue = debounce(value => {
    console.log(value);
  }, 500);
  const handleChange = e => {
    consoleValue(e.target.value);
  };
  return <Input onChange={handleChange} />;
}
```
