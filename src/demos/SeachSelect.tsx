import React from 'react';
import { SearchSelect } from 'chili-lib';

export default function Demo() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <SearchSelect
      url="https://randomuser.me/api/"
      searchKey="results"
      dataObjKey="results"
      dataFormat={{ key: 'phone', value: 'email' }}
      onChange={handleChange}
      allowClear
      style={{ width: 300 }}
    />
  );
}
