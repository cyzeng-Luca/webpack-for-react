/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';


import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept('./App.jsx', () => {
  const NextRootContainer = App;
  render(<NextRootContainer />, document.getElementById('app'));
});
