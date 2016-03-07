const JsonDB = require('node-json-db');

function Absence(AbsenceService) {
    this.render = function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(AbsenceService.getAbsences()));
    };
}

module.exports = Absence;
