import React from 'react';
import ReactDOM from 'react-dom';

import Application from './componenets/Application';
import WebAPIUtils from './utils/WebAPIUtils';

WebAPIUtils.initializeStreamOfTweets();

ReactDOM.render(
  <Application />,
  document.getElementById('react-application')
);
