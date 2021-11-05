import React from 'react';
import { BaseSelect } from 'chili-lib';
import type { SelectValue } from 'antd/lib/select';

export default function Demo() {
  const onSelect = (code: SelectValue) => {
    console.log(code);
  };
  return (
    <BaseSelect
      request={async () => [
        { label: '全部11', value: 'all' },
        { label: '未解决', value: 'open' },
        { label: '已解决', value: 'closed' },
        { label: '解决中', value: 'processing' },
      ]}
      onSelect={onSelect}
      style={{ width: 300 }}
    />
  );
}
