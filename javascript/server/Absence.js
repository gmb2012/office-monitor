function Absence(AbsenceService) {
    this.addAbsence = function(req, res) {
        AbsenceService.addAbsenceItem(req.params.person, req.body);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'message': 'ok' }));
    };

    this.deleteAbsence = function(req, res) {
        AbsenceService.deleteAbsenceItem(req.params.person, req.params.item);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'message': 'ok' }));
    };

    this.getAbsences = function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(AbsenceService.getAbsences()));
    };
}

module.exports = Absence;