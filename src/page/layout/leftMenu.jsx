import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';
// import { Link } from 'react-router-dom';

import './leftMenu.less';

class LeftMenu extends BaseComponent {
  constructor() {
    super();
    this.state = {
      currentItem: 'AGENT',
    };
  }

  changeCurrentItem = (current) => {
    this.setState({
      currentItem: current,
    });
  }

  render() {
    return (
      <div className="left-menu">
        <ul>
          {this.props.common.get('menuItem').map(item => (
            <li
              className={item.get('name') === this.state.currentItem ? 'menu-item active' : 'menu-item'}
              key={item.get('name')}
              onClick={() => this.changeCurrentItem(item.get('name'))}
            >
              <i className={`icon ${item.get('iconClass')}`} />
              {item.get('name')}
            </li>
          ))}
        </ul>
        <div className="history">
          <h6>History</h6>
          <ul>
            {
              this.props.common.get('history').map(item => (
                <li key={item.get('action')}>{item.get('action')}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}


export default LeftMenu;
