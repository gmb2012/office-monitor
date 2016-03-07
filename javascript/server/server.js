const express = require('express');
const app = express();
const compression = require('compression');
const winston = require('winston');
const Config = require('./config.json');
const Status = require('./Status');
const AbsenceService = require('./AbsenceService');
const Absence = require('./Absence');

// enable compression
app.use(compression());

// static routes
app.use(express.static('public'));

// webservice endpoints
// status
const CurrentStatus = new Status();
app.get('/services/V1/status', function (req, res) {
    CurrentStatus.render(req, res);
});

app.post('/services/V1/status', function (req, res) {
    CurrentStatus.changeStatus(req, res);
});

// absence
const absenceService = new AbsenceService(Config.AbsenceService);
app.get('/services/V1/absence', function (req, res) {
    (new Absence(absenceService)).render(req, res);
});

app.listen(3000);
winston.info('Webserver is running on port 3000');
