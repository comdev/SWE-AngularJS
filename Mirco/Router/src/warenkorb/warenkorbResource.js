/// <reference path="warenkorb.d.ts"/>
/// <reference path="../artikel/artikel.d.ts"/>
var artikel_1 = require('../artikel/artikel');
var warenkorb_1 = require('./warenkorb');
var warenkorb = [
    new warenkorb_1.Warenkorb(new artikel_1.Artikel('Tisch', 10), 4),
    new warenkorb_1.Warenkorb(new artikel_1.Artikel('Sofa', 10), 3),
    new warenkorb_1.Warenkorb(new artikel_1.Artikel('Stuhl', 8), 1)
];
exports.WarenkorbResource = {
    add: function (art) {
        var position = this.notIn(art);
        if (position === -1) {
            warenkorb.push(new warenkorb_1.Warenkorb(art, 1));
        }
        else {
            warenkorb[position].anzahl++;
        }
    },
    delete: function (artikel) {
        var position = this.notIn(artikel);
        if (position !== -1) {
            var anzahl = warenkorb[position].anzahl;
            if (anzahl !== 1) {
                warenkorb[position].anzahl--;
            }
            else {
                warenkorb.splice(position, 1);
            }
        }
    },
    getGesamtpreis: function () {
        var i = 0;
        var gespreis = 0;
        for (i; i < warenkorb.length; i++) {
            gespreis = gespreis + warenkorb[i].artikel.preis * warenkorb[i].anzahl;
        }
        return gespreis;
    },
    getWarenkorb: function () {
        return warenkorb;
    },
    notIn: function (artikel) {
        for (var i = 0; i < warenkorb.length; i++) {
            if (warenkorb[i].artikel.name === artikel.name) {
                return i;
            }
        }
        return -1;
    },
    deleteAll: function () {
        warenkorb = [];
    }
};
