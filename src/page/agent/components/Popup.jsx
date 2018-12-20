import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';
import Trigger from '@shared/utils/Trigger';
import './Popup.less';

class Popup extends BaseComponent {
  constructor() {
    super();
    this.state = {
      visible: false,
      inputValue: '',
    };
  }

  // FIXME：是否可以和onClose结合
  onVisibleChange = (value) => {
    this.setState({
      visible: value,
      inputValue: '',
    });
  }

  changeInput = (type, value) => {
    this.setState({
      [type]: value,
    });
  }

  onOk = () => {
    // FIXME：这里需要过滤相同的数据，不然React数组的key会报错，通常服务器会返回不用的ID或者时间戳
    const { item } = this.props;
    const list = this.state.inputValue ? this.state.inputValue.split(',') : [];
    this.props.addSystemCard(
      {
        id: item.get('id'),
        resources: item.get('resources').concat(list),
      },
    ).then(() => {
      this.onClose();
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
      inputValue: '',
    });
  }

  render() {
    const content = (
      <div className="tw-popup">
        <div className="tw-popover-arrow" />
        <i className="icon-close" role="button" onClick={this.onClose} />
        <span>Separate multiple resource with commas</span>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => { this.changeInput('inputValue', e.target.value); }}
        />
        <div className="btn-group">
          <button type="button" onClick={this.onOk}>Add Resources</button>
          <button type="button" className="cancel" onClick={this.onClose}>Cancel</button>
        </div>
      </div>
    );
    return (
      <div className="tw-popup-container">
        <Trigger
          visibleChange={this.onVisibleChange}
          content={content}
          visible={this.state.visible}
        >
          {this.props.children}
        </Trigger>
      </div>
    );
  }
}

export default Popup;
