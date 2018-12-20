import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from '@shared/utils/BaseComponent';
import Card from './components/Card';
import Tabs from './components/Tabs';
import TableList from './components/TableList';
import { getAgentTableList, deleteSystemCard, addSystemCard } from './actions';
import './index.less';

class Root extends BaseComponent {
  constructor() {
    super();
    this.state = {
      currentItem: 'list',
    };
  }

  changeCurrentItem = (current) => {
    this.setState({
      currentItem: current,
    });
  }

  componentDidMount() {
    this.props.getAgentTableList();
  }

  render() {
    return (
      <div className="agent">
        <div className="board">
          <Card
            className="building"
            title="Building"
            count="3"
            iconClassName="icon-cog"
          />
          <Card
            className="idle"
            title="Idle"
            count="5"
            iconClassName="icon-coffee"
          />
          <div className="card statistics">
            <div className="statistics-content">
              <span className="title">ALL</span>
              <span className="count">8</span>
            </div>
            <div className="statistics-content">
              <span className="title">PHYSICAL</span>
              <span className="count">4</span>
            </div>
            <div className="statistics-content">
              <span className="title">VIRTUAL</span>
              <span className="count">4</span>
            </div>
          </div>
        </div>

        <div className="search-bar">
          <Tabs tabItem={this.props.agentReducer.get('tabItem')} />
          <span className="search">
            <i className="icon-search" />
            <input type="text" />
          </span>
          <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
            <div className="icon-more">
              <i
                className={this.state.currentItem === 'card' ? 'icon-th-card active' : 'icon-th-card'}
                role="button"
                onClick={() => this.changeCurrentItem('card')}
              />
              <i
                className={this.state.currentItem === 'list' ? 'icon-th-list active' : 'icon-th-list'}
                role="button"
                onClick={() => this.changeCurrentItem('list')}
              />
            </div>
          </div>
        </div>
        <TableList
          tableList={this.props.agentReducer.get('tableList')}
          deleteSystemCard={this.props.deleteSystemCard}
          addSystemCard={this.props.addSystemCard}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  agentReducer: state.agentReducer,
});

const mapDispatchToProps = {
  getAgentTableList,
  deleteSystemCard,
  addSystemCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
