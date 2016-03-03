import React from 'react';
import Config from './config.json';
import StatusComponent from './components/StatusComponent';

/* global document */
React.render(<StatusComponent {...Config.StatusComponent} />, document.getElementById('StatusComponent'));


