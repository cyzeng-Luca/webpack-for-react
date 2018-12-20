import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';
import './Card.less';

class Popup extends BaseComponent {
  render() {
    const {
      className, title, count, iconClassName,
    } = this.props;
    return (
      <div className={`tw-card ${className}`}>
        <span className="title">{title}</span>
        <span className="count">{count}</span>
        <i className={`icon ${iconClassName}`} />
      </div>
    );
  }
}

export default Popup;
