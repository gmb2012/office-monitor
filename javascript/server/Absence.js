const winston = require('winston');


function Absence() {
    getAbsences = function() {

    };


    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ }));
    };
}

module.exports = Absence;
