const winston = require('winston');
const JsonDB = require('node-json-db');

function AbsenceService(config) {
    var db = new JsonDB(__dirname + config.file, config.autoSave, config.humanReadable);

    this.getAbsences = function() {
        try {
            var data = db.getData('/');
        } catch(error) {
            winston.error('Webserver is running on port 3000');
        }

        return data;
    };



}

module.exports = AbsenceService;
