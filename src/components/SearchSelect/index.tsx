import React, { useEffect, useState, useRef } from 'react';
import { Spin } from 'antd';
import BaseSelect, { BaseSelectProps } from '../BaseSelect';
import request from './request';
import debounce from '../../utils/debounce';

interface SearchSelectType extends BaseSelectProps<any> {
  url: string;
  searchKey: string;
  dataObjKey: string;
  initNotFetch?: boolean;
  wait?: number;
  onError?: (err: any) => void;
}

type propsType = Omit<SearchSelectType, 'data'>;

export default function SearchSelect(props: propsType) {
  const {
    url,
    wait = 200,
    searchKey,
    initNotFetch,
    dataObjKey = 'results',
    onError,
    ...rest
  } = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [searchValue, setSearchValue] = useState('');
  // const isMounted = useRef(false);

  const fetchData = (searchValue = '') => {
    setLoading(true);
    setData([]);
    request({
      url: `${url}?${searchKey}=${searchValue}`,
      onSuccess: dataObj => {
        if (dataObj[dataObjKey]) {
          setData(dataObj[dataObjKey]);
        }
        setLoading(false);
      },
      onError: err => {
        setLoading(false);
        // eslint-disable-next-line no-unused-expressions
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

  // 更新请求
  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true;
  //   } else {
  //     fetchData();
  //   }
  // }, [searchValue]);

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
