const winston = require('winston');
const JsonDB = require('node-json-db');
const uuid = require('node-uuid');
const AbsenceServiceDeorator = require('./AbsenceServiceDecorator');

function AbsenceService(config) {
    const db = new JsonDB(__dirname + config.file, config.autoSave, config.humanReadable);
    const decorator = new AbsenceServiceDeorator();

    this.addAbsenceItem = function(uuidPerson, item) {
        db.push('/' + uuidPerson + '/items/' + uuid.v4(), item);
    };

    this.deleteAbsenceItem = function(uuidPerson, uuidItem) {
        db.delete('/' + uuidPerson + '/items/' + uuidItem);
        db.save();
    };

    this.getAbsences = function() {
        try {
            var data = db.getData('/');
        } catch(error) {
            winston.error('Can not get data');
        }

        return decorator.fromDb(data);
    };



}

module.exports = AbsenceService;