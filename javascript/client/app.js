import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Config from './config.json';
import AppComponent from './components/AppComponent';

import configureStore from './store/configureStore';

/* global document */
ReactDOM.render(
    <Provider store={configureStore()}>
        <AppComponent config={Config} />
    </Provider>,
    document.getElementById('root'));
