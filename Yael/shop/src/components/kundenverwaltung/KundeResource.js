/**
 * Created by yaelwidmann on 20.05.15.
 */
var Kunde_1 = require('./Kunde');
var Adresse_1 = require('./Adresse');
var KundeResource = (function () {
    function KundeResource() {
        this.kunden = new Array();
        var kunde1 = new Kunde_1.Kunde(1, "herbert", "huber", "herbert.huber@web.de", new Adresse_1.Adresse("Karlsruhe", 71245, "Moltkestrasse", 3));
        var kunde2 = new Kunde_1.Kunde(2, "kunde2", "Herterer", "frank.herterer@web.de", new Adresse_1.Adresse("Ettlingen", 71245, "Goethestrasse", 3));
        this.kunden.push(kunde1);
        this.kunden.push(kunde2);
    }
    KundeResource.prototype.getAlleKunden = function () {
        return this.kunden;
    };
    KundeResource.prototype.getKundeById = function (id) {
        for (var kunde in this.kunden) {
            if (this.kunden.hasOwnProperty(kunde)) {
                if (kunde.id === 1) {
                    return " Herbert";
                }
            }
        }
        return " Kunde mit der Id:" + id + " gibt es nicht";
    };
    return KundeResource;
})();
exports.KundeResource = KundeResource;
