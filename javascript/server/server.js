const express = require('express');
const app = express();
const compression = require('compression');
const winston = require('winston');
const Status = require('./Status');

// enable compression
app.use(compression());

// static routes
app.use(express.static('public'));

// webservice endpoints
const CurrentStatus = new Status();
app.get('/services/V1/status', function (req, res) {
    CurrentStatus.render(req, res);
});

app.post('/services/V1/status', function (req, res) {
    CurrentStatus.changeStatus(req, res);
});

app.listen(3000);
winston.info('Webserver is running on port 3000');
