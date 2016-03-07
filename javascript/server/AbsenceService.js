const winston = require('winston');
const JsonDB = require('node-json-db');
const AbsenceServiceDeorator = require('./AbsenceServiceDecorator');

function AbsenceService(config) {
    const db = new JsonDB(__dirname + config.file, config.autoSave, config.humanReadable);
    const decorator = new AbsenceServiceDeorator();


    this.getAbsences = function() {
        try {
            var data = db.getData('/');
        } catch(error) {
            winston.error('Webserver is running on port 3000');
        }

        return decorator.fromDb(data);
    };



}

module.exports = AbsenceService;