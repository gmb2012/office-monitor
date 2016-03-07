const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const winston = require('winston');
const Config = require('./config.json');
const Status = require('./Status');
const AbsenceService = require('./AbsenceService');
const Absence = require('./Absence');

// enable compression & json parsing
app.use(compression());
app.use(bodyParser.json());

// static routes
app.use(express.static('public'));

// webservice endpoints
// status
const CurrentStatus = new Status();
app.get('/services/V1/status', function (req, res) {
    CurrentStatus.getStatus(req, res);
});

app.post('/services/V1/status', function (req, res) {
    CurrentStatus.changeStatus(req, res);
});

// absence
const absence = new Absence(new AbsenceService(Config.AbsenceService));
app.get('/services/V1/absence', function (req, res) {
    absence.getAbsences(req, res);
});

app.post('/services/V1/absence/:person', function (req, res) {
    absence.addAbsence(req, res);
});

app.delete('/services/V1/absence/:person/:item', function (req, res) {
    absence.deleteAbsence(req, res);
});

app.listen(3000);
winston.info('Webserver is running on port 3000');
