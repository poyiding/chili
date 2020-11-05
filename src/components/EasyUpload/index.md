---
title: EasyUpload
---

## 文件上传组件

文件上传前的类型和文件大小的校验

## demo

```jsx
import React, { useState } from 'react';
import { Button, Upload, message } from 'antd';
import { EasyUpload } from 'chili-lib';

export default function Demo() {
  const [fileList, setFileList] = useState([]);

  const handleChange = info => {
    console.log(info.file, info.fileList);
    const { file, fileList } = info;
    if (file.response && file.response.status === 'done') {
      message.success(`${file.name} 上传成功`);
    } else if (file.status === 'error') {
      message.error(`${file.name} 上传失败.`);
    }
    const transList = [...fileList]
      .filter(file => file.status)
      .map(file => {
        if (file.response && file.response.status === 'done') {
          file.url = file.response.url;
        }
        return file;
      });
    setFileList(transList);
  };

  const props = {
    name: 'file',
    size: 1,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    acceptType: ['.jpeg', '.docx', '.png'],
    fileList,
  };
  return (
    <EasyUpload {...props}>
      <Button>+ 上传文件</Button>
    </EasyUpload>
  );
}
```

## api

| 参数       | 说明                    | 类型     | 默认值 |
| :--------- | :---------------------- | :------- | :----- |
| acceptType | 上传的文件类型          | string[] | -      |
| size       | 上传文件的大小(单位：M) | number   | -      |

其他 api 同 antd Upload 组件
