import React from 'react';
import Config from './config.json';
import StatusComponent from './components/StatusComponent';
import AbsenceComponent from './components/AbsenceComponent';

/* global document */
React.render(<StatusComponent {...Config.StatusComponent} />, document.getElementById('StatusComponent'));
React.render(<AbsenceComponent {...Config.AbsenceComponent} />, document.getElementById('AbsenceComponent'));