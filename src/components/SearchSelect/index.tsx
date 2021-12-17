import React, { useEffect, useState, useCallback } from 'react';
import { Spin } from 'antd';
import BaseSelect from '../BaseSelect';
import type { BaseSelectProps } from '../BaseSelect';
import debounce from '../../utils/debounce';

interface SearchSelectType extends BaseSelectProps<any> {

  initNotFetch?: boolean;
  wait?: number;
  request: (keyword?:string) => Promise<[]>
}

type propsType = Omit<SearchSelectType, 'data'>;

export default function SearchSelect(props: propsType) {
  const {
    request,
    wait = 200,
    initNotFetch,
    ...rest
  } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (keyWords?: string) => {
    setLoading(true);
    setData([])
    const res = await request(keyWords);
    if(res) {
      setData(res)
    }
    setLoading(false);
  },[]);
  // 第一次默认执行
  useEffect(() => {
    if (!initNotFetch) {
      fetchData();
    }
  }, []);

  const handleSearch = debounce(
     (keyWords?: string) => {
      fetchData(keyWords);
    },
    wait,
  );
  return (
    <BaseSelect
      {...rest}
      showSearch
      filterOption={false}
      onSearch={handleSearch}
      notFoundContent={loading ? <Spin size="small" /> : null}
      data={data}
    />
  );
}
