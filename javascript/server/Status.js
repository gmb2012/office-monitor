const winston = require('winston');
const superagent = require('superagent');

function Status() {
    const timeout = 7200000;    // reset after two hours

    var available = true;
    var timer;

    var startReset = function() {
        clearTimeout(timer);
        if(!available) {
            timer = setTimeout(function() { available = true; }, timeout);
        }
    };

    this.changeStatus = function (req, res) {
        available = !available;
        startReset();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ available: available }));
    };

    this.getStatus = function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ available: available }));
    };
}

module.exports = Status;
