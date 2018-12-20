import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';

import './header.less';

class Header extends BaseComponent {
  render() {
    return (
      <header className="header">
        <div className="app-container header-content">
          <div className="user" />
        </div>
      </header>
    );
  }
}

export default Header;
