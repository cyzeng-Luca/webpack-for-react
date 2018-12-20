import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';
// import windows from '@assets/img/windows.png';
import Popup from './Popup';
import './TableList.less';

class TableList extends BaseComponent {
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
    const { tableList } = this.props;
    return (
      tableList.map(item => (
        <div className="item-list" key={item.get('id')}>
          <div className="logo">
            <img src={item.get('os')} alt="system icon" />
          </div>
          <div className="description">
            <div className="data">
              <span className="name">
                <i className="icon-desktop" />
                <span>{item.get('name')}</span>
              </span>
              <span className={`status ${item.get('status')}`}>{item.get('status')}</span>
              <span className="ip">
                <i className="icon-info" />
                {item.get('ip')}
              </span>
              <span className="location">
                <i className="icon-folder" />
                {item.get('location')}
              </span>
            </div>
            <div className="tips">
              <Popup addSystemCard={this.props.addSystemCard} item={item}>
                <i className="icon-plus" />
              </Popup>
              {
                item.get('resources').map(itemChild => (
                  <div className="system-card" key={itemChild}>
                    <span>{itemChild}</span>
                    <i
                      className="icon-trash"
                      role="button"
                      onClick={() => {
                        const resources = item.get('resources');
                        const name = itemChild;
                        this.props.deleteSystemCard(
                          {
                            id: item.get('id'),
                            resources: resources.filter(itemName => itemName !== name),
                          },
                        );
                      }}
                    />
                  </div>
                ))
              }
              <div className="button-content">
                {
                  item.get('status') === 'building' ? (
                    <button type="button">
                      <i className="icon-deny" />
                      Deny
                    </button>
                  ) : null
                }
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }
}

export default TableList;
