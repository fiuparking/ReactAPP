import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import * as serviceWorker from './utils/serviceWorker';
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('app'),
);

serviceWorker.unregister();
