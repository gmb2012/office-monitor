const winston = require('winston');



function AbsenceService(config) {

    this.connect = function() {

    };


    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ }));
    };
}

module.exports = AbsenceService;
