/// <reference path="artikel.d.ts"/>
var Artikel_1 = require('./Artikel');
var artikel = [
    new Artikel_1.Artikel("Tasche", 100),
    new Artikel_1.Artikel("Rucksack", 20),
    new Artikel_1.Artikel("Geldbeutel", 10),
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
        artikel.push(art);
    }
};
