import React from 'react';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import BaseComponent from '@shared/utils/BaseComponent';
import Header from './header';
import LeftMenu from './leftMenu';

import Footer from './footer';

import './section.less';
import './index.less';
import '../../assets/icomoon/fonts.css';


class Layout extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      // leftMenuCollapsed: false,
    };
  }

  render() {
    const { route } = this.props;
    return (
      <React.Fragment>
        <Header />
        <section className="app-container section">
          <LeftMenu common={this.props.common} />
          <div className="section-content">
            {renderRoutes(route.routes)}
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  common: state.common,
});

export default connect(mapStateToProps)(Layout);
