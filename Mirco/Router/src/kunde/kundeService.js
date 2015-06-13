/// <reference path="kunde.d.ts"/>
var kunde_1 = require('./kunde');
var kunden = [
    new kunde_1.Kunde("Mirco", "Schwarz", "mirco@schwarz.de", "123"),
    new kunde_1.Kunde("Cornelius", "Müller", "cornelius@mueller.de", "123"),
    new kunde_1.Kunde("Sally", "Pfeifer", "sally@pfeifer.de", "123"),
    new kunde_1.Kunde("Yael", "Widmann", "yael@widmann.de", "123")
];
exports.KundeService = {
    getKundeByName: function (name, nachname) {
        for (var position = 0; position < kunden.length; position++) {
            if (kunden[position].name === name && kunden[position].nachname === nachname) {
                return kunden[position];
            }
        }
        return null;
    },
    getKundeByEmail: function (email) {
        for (var position = 0; position < kunden.length; position++) {
            if (kunden[position].email === email) {
                return kunden[position];
            }
        }
        return null;
    },
    getAllKunden: function () {
        return kunden;
    },
    add: function (kunde) {
        if (kunde !== null) {
            kunden.push(kunde);
        }
    },
    delete: function (kunde) {
        if (kunde !== null) {
            var position = kunden.indexOf(kunde);
            if (position !== -1)
                kunden.splice(position);
        }
    }
};
