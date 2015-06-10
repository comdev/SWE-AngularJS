/**
 * Created by yaelwidmann on 20.05.15.
 */
var Artikel_1 = require('./Artikel');
var ArtikelResource = (function () {
    function ArtikelResource() {
        this.artikel = [
            new Artikel_1.Artikel("Tasche", 1),
            new Artikel_1.Artikel("Rucksack", 1),
            new Artikel_1.Artikel("Geldbeutel", 1),
        ];
    }
    ArtikelResource.prototype.getAllArtikel = function () {
        return this.artikel;
    };
    ArtikelResource.prototype.getArtikelByName = function (name) {
        if (name.length <= 0) {
            return;
        }
        this.artikel.forEach(function (art) {
            if (art.name === name) {
                return art;
            }
        });
    };
    return ArtikelResource;
})();
exports.ArtikelResource = ArtikelResource;
