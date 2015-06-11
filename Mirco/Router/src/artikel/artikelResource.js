/// <reference path="artikel.d.ts"/>
var Artikel_1 = require('./Artikel');
var artikel = [
    new Artikel_1.Artikel("Tasche", 1),
    new Artikel_1.Artikel("Rucksack", 1),
    new Artikel_1.Artikel("Geldbeutel", 1),
];
exports.ArtikelResource = {
    getAllArtikel: function () {
        return artikel;
    },
    getArtikelByName: function (name) {
        if (name.length <= 0) {
            return;
        }
        this.artikel.forEach(function (art) {
            if (art.name === name) {
                return art;
            }
        });
    },
    add: function (art) {
        if (!isNaN(art.preis) && art.preis > 0) {
            artikel.push(art);
        }
    }
};
