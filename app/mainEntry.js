import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import ReactHOC, { WithHeaderDemo, HOCwithParamsDemo } from 'pages/HOC'
import ReactHOCDereactor from 'pages/HOCDereactor'


ReactDOM.render(
  <ReactHOCDereactor />,
  document.getElementById('root')
);
