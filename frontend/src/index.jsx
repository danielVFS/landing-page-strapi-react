import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './styles/global-styles';
import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
