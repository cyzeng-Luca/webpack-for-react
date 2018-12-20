import React from 'react';
import BaseComponent from '@shared/utils/BaseComponent';

import './footer.less';


export default class extends BaseComponent {
  render() {
    return (
      <footer className="footer">
        © Copyright 2017
        <strong>Thought</strong>
        Works
      </footer>
    );
  }
}
