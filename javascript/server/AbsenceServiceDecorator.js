function AbsenceServiceDecorator() {
    this.fromDb = function(absencePersons) {
        return Object.keys(absencePersons).map((function(key) { return this.personFromDB(key, absencePersons[key]); }).bind(this));
    };

    this.personFromDB = function(uuid, absencePerson) {
        return {
            "id": uuid,
            "name": absencePerson.name,
            "items": Object.keys(absencePerson.items)
                .map((function(key) { return this.itemFromDB(key, absencePerson.items[key]); }).bind(this))
                .filter(function(item) { return item.to * 1000 >=  (Date.now() - 86400000); }) // show current day and yesterday
                .sort(function(a, b) { return a.from - b.from; })
        };
    };

    this.itemFromDB = function(uuid, absenceItem) {
        absenceItem.id = uuid;
        return absenceItem;
    };

}

module.exports = AbsenceServiceDecorator;