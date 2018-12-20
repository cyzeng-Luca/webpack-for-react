import React from 'react';
import { BaseComponent } from 'kryfe-lib';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';

import './nav.less';

class Nav extends BaseComponent {
  render() {
    const navData = this.props.commonStoreReducer.getIn(['data', 'navData']);
    return (
      <nav className="nav">
        <Breadcrumb>
          {navData.get('nav').map(item => (
            <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  system: state.__system__,
  commonStoreReducer: state.commonStoreReducer,
});

export default connect(mapStateToProps)(Nav);
