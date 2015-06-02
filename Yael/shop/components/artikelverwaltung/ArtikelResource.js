/**
 * Created by yaelwidmann on 20.05.15.
 */
var angular2_1 = require('angular2/angular2');
var Artikel_1 = require('./Artikel');
var ArtikelResource = (function () {
    function ArtikelResource() {
        var tasche = new Artikel_1.Artikel(1, "Tasche", 1, 50, true);
        //tasche.id = 1;
        //tasche.bezeichnung = "Tasche";
        //tasche.version = 1;
        //tasche.preis = 50;
        var rucksack = new Artikel_1.Artikel(2, "Rucksack", 1, 50, true);
        //rucksack.id = 1;
        //rucksack.bezeichnung = "Rucksack";
        //rucksack.version = 1;
        //rucksack.preis = 50;
        var geldbeutel = new Artikel_1.Artikel(3, "Geldbeutel", 1, 50, true);
        //geldbeutel.id = 1;
        //geldbeutel.bezeichnung = "Geldbeutel";
        //geldbeutel.version = 1;
        //geldbeutel.preis = 50;
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
angular2_1.bootstrap(ArtikelResource);
