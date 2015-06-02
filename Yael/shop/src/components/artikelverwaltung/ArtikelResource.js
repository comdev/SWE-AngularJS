/**
 * Created by yaelwidmann on 20.05.15.
 */
var Artikel_1 = require('./Artikel');
var ArtikelResource = (function () {
    function ArtikelResource() {
        var tasche = new Artikel_1.Artikel(1, "Tasche", 1, 50, true);
        var rucksack = new Artikel_1.Artikel(2, "Rucksack", 1, 50, true);
        var geldbeutel = new Artikel_1.Artikel(3, "Geldbeutel", 1, 50, true);
        this.artikel = new Array();
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
    ArtikelResource.prototype.getArtikelById = function (id) {
        for (var art in this.artikel) {
            if (art.id.isEqual(id)) {
                return art;
            }
            else {
                return "Artikel nicht vorhanden";
            }
        }
    };
    ArtikelResource.prototype.getArtikelByBezeichnung = function (bezeichnung) {
        var artikel = [];
        for (var art in this.artikel) {
            if (art.bezeichnung.isEqual(bezeichnung)) {
                artikel.push(art);
            }
        }
        return artikel;
    };
    return ArtikelResource;
})();
exports.ArtikelResource = ArtikelResource;
