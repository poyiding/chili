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
// 使用 class component 是因为避免antd 获取refs 报警问题
export default class InputNumAddon extends React.PureComponent<
  InputNumAddonProps
> {
  render() {
    const { addonBefore, addonAfter, style, ...restPops } = this.props;
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
      <span className="addonWrapper">
        {addonBeforeNode}
        <InputNumber
          {...restPops}
          style={{
            ...styleAddon.beforeAddon,
            ...styleAddon.afterAddon,
            ...style,
          }}
        />
        {addonAfterNode}
      </span>
    );
  }
}
