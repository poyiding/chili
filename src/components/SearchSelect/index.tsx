import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import BaseSelect from '../BaseSelect';
import type { BaseSelectProps } from '../BaseSelect';
import request from './request';
import debounce from '../../utils/debounce';

interface SearchSelectType extends BaseSelectProps<any> {
  url: string;
  searchKey: string;
  initNotFetch?: boolean;
  wait?: number;
  onError?: (err: any) => void;
  formatResult?: (response: any) => any;
}

type propsType = Omit<SearchSelectType, 'data'>;

export default function SearchSelect(props: propsType) {
  const {
    url,
    wait = 200,
    searchKey,
    initNotFetch,
    onError,
    formatResult,
    ...rest
  } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = (searchValue = '') => {
    setLoading(true);
    setData([]);
    request({
      url: `${url}?${searchKey}=${searchValue}`,
      onSuccess: res => {
        if (formatResult) {
          setData(formatResult(res));
        } else {
          setData(res.data);
        }
        setLoading(false);
      },
      onError: err => {
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onError && onError(err);
      },
    });
  };

  // 第一次默认执行
  useEffect(() => {
    if (!initNotFetch) {
      fetchData();
    }
  }, []);

  const handleSearch = debounce(
    (value: string) => fetchData(encodeURI(value)),
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
