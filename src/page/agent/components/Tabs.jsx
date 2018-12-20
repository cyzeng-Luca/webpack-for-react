import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';
import './Tabs.less';

class Tabs extends BaseComponent {
  constructor() {
    super();
    this.state = {
      currentItem: 'ALL',
    };
  }

  changeCurrentItem = (current) => {
    this.setState({
      currentItem: current,
    });
  }

  render() {
    const { tabItem } = this.props;
    return (
      <div className="tw-tab">
        <div className="tab-container">
          {tabItem.map(item => (
            <li
              className={item === this.state.currentItem ? 'tab-title active' : 'tab-title'}
              key={item}
              onClick={() => this.changeCurrentItem(item)}
            >
              {item}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Tabs;
