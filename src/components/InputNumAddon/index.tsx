import React from 'react';
import { InputNumber } from 'antd';
import { InputNumberProps } from 'antd/lib/input-number';
import './index.less';
// import styles from './index.less';

interface InputNumAddonProps extends InputNumberProps {
  addonBefore?: string | React.ReactNode;
  addonAfter?: string | React.ReactNode;
  style?: React.CSSProperties;
}

type ObjProps = {
  [key: string]: object;
};

export default function InputNumAddon(props: InputNumAddonProps) {
  const { addonBefore, addonAfter, ...restPops } = props;
  const addonBeforeNode = addonBefore ? (
    <span className="inputAddon addonBefore">{addonBefore}</span>
  ) : null;

  const addonAfterNode = addonAfter ? (
    <span className="inputAddon addonAfter">{addonAfter}</span>
  ) : null;

  const styleAddon: ObjProps = {};
  if (addonBefore) {
    styleAddon.beforeAddon = {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    };
  }
  if (addonAfter) {
    styleAddon.afterAddon = {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    };
  }
  return (
    <span className="groupWrapper" style={{ width: props.width }}>
      <span className="addonWrapper">
        {addonBeforeNode}
        <InputNumber
          min={0}
          max={1000000000}
          {...restPops}
          style={{
            width: '100%',
            ...styleAddon.beforeAddon,
            ...styleAddon.afterAddon,
          }}
        />
        {addonAfterNode}
      </span>
    </span>
  );
}
