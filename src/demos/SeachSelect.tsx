import React from 'react';
import { SearchSelect } from 'chili-lib';

export default function Demo() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <SearchSelect
      request={async (keyWords = '') => {
        const { results } = await fetch(`https://randomuser.me/api/?results=${keyWords}`).then(res => res.json());
        return results?.map((item: Record<string, string>) => ({ label: item.email, value: item.phone }))
      }}
      onChange={handleChange}
      allowClear
      style={{ width: 300 }}
    />
  );
}
