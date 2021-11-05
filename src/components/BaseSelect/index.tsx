import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import type { SelectValue, SelectProps, LabeledValue } from 'antd/lib/select';

type DataObj = Record<string, string | number | boolean>;
export interface BaseSelectProps<T> extends SelectProps<T> {
  data?: DataObj[] | DataObj;
  dataFormat?: { key: string; value: string };
  request?: () => Promise<DataObj[]>;
}

const dataToOptions = (data: any[] | DataObj, dataFormat?: { key: string; value: string }) => {
  if (Array.isArray(data)) {
    return data.map(item => {
      if (dataFormat) {
        return {
          label: item[dataFormat.value],
          value: item[dataFormat.key],
        };
      }
      return {
        label: item.label || item.value,
        value: item.value || item.key,
      };
    });
  }
  if (Object.prototype.toString.call(data) === '[object Object]') {
    return Object.keys(data).map(item => ({
      label: data[item],
      value: item,
    }));
  }
  return [];
};

export default function BaseSelect(props: BaseSelectProps<SelectValue>) {
  const { data, dataFormat, request, options, ...rest } = props;
  const [optionList, setOptions] = useState<LabeledValue[]>();
  const fetchData = async () => {
    if (request) {
      const loadData = await request();
      setOptions(dataToOptions(loadData, dataFormat));
    }
  };
  useEffect(() => {
    if (options) return;
    if (data && !request) {
      setOptions(dataToOptions(data, dataFormat));
    }
    fetchData();
  }, [JSON.stringify(data), request]);

  return <Select options={optionList} {...rest} />;
}
