import React from 'react';
import { Upload, message } from 'antd';
import type { UploadProps, RcFile } from 'antd/lib/upload/interface';

interface EasyUploadProps extends UploadProps {
  size?: number;
  acceptType?: string[];
  beforeUpload?: (
    file: RcFile,
    fileList: RcFile[],
  ) => boolean | PromiseLike<void>;
}

export default function EasyUpload(props: EasyUploadProps) {
  const { size, acceptType, beforeUpload } = props;
  const callBeforeUpload = (file: RcFile, fileList: RcFile[]) => {
    // 限制上传文件类型
    if (acceptType && acceptType.length > 0) {
      const isAccet = acceptType.some(item => file.name.includes(item));
      if (!isAccet) {
        message.error(`不支持上传${file.type}文件`);
        return false;
      }
    }

    // 限制文件上传大小，单位M
    const fileSize = Number((file.size / 1024 / 1024).toFixed(2));
    if (size && fileSize > size) {
      message.error(`文件大小不能超过${size}M`);
      return false;
    }

    if (beforeUpload) {
      return beforeUpload(file, fileList);
    }
    return true;
  };

  return <Upload beforeUpload={callBeforeUpload} {...props} />;
}
