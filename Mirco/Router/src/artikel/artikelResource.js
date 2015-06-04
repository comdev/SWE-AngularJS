/**
 * Created by yaelwidmann on 20.05.15.
 */
var Artikel_1 = require('./Artikel');
var ArtikelResource = (function () {
    function ArtikelResource() {
        var tasche = new Artikel_1.Artikel("Tasche", 1);
        var rucksack = new Artikel_1.Artikel("Rucksack", 1);
        var geldbeutel = new Artikel_1.Artikel("Geldbeutel", 1);
        this.artikel = [];
        this.artikel.push(tasche);
        this.artikel.push(rucksack);
        this.artikel.push(geldbeutel);
    }
    ArtikelResource.prototype.addArtikel = function (artikel) {
        this.artikel.push(artikel);
    };
    ArtikelResource.prototype.getAllArtikel = function () {
        return this.artikel;
    };
    return ArtikelResource;
})();
exports.ArtikelResource = ArtikelResource;
