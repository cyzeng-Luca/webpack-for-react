import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';

import routes from '@src/routes';

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

const App = () => (
  <React.Fragment>
    {renderRoutes(routes)}
  </React.Fragment>
);

export default hot(module)(App);
