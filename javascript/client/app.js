import React from 'react';
import Config from './config.json';
import AppComponent from './components/AppComponent';

/* global document */
React.render(<AppComponent config={Config} />, document.getElementById('root'));