import React from 'react';
import { BaseComponent } from 'kryfe-lib';
import { Layout } from 'antd';

import './header.less';

const HeaderComp = Layout.Header;

export default class Header extends BaseComponent {
  render() {
    return <HeaderComp className="header" />;
  }
}
