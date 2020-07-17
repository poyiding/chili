import React from 'react';
import { Select } from 'antd';
import { SelectValue, SelectProps } from 'antd/lib/select';

const { Option } = Select;

type dataObj = {
  [key: string]: string | number;
};

export interface BaseSelectProps<T> extends SelectProps<T> {
  data: dataObj[] | dataObj;
  dataFormat?: dataObj;
}

export default function BaseSelect(props: BaseSelectProps<SelectValue>) {
  const { data, dataFormat, ...rest } = props;

  if (Array.isArray(data)) {
    return (
      <Select {...rest}>
        {data.map(ele => {
          if (dataFormat === undefined) {
            return (
              <Option key={ele.key} value={ele.key}>
                {ele.value}
              </Option>
            );
          }
          return (
            <Option key={ele[dataFormat.key]} value={ele[dataFormat.key]}>
              {ele[dataFormat.value]}
            </Option>
          );
        })}
      </Select>
    );
  }
  return (
    <Select {...rest}>
      {Object.keys(data).map(item => (
        <Option key={item} value={item}>
          {data[item]}
        </Option>
      ))}
    </Select>
  );
}
