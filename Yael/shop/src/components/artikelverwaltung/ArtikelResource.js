/**
 * Created by yaelwidmann on 20.05.15.
 */
var module_1 = require();
var ArtikelResource = (function () {
    function ArtikelResource() {
        var tasche = new module_1.Artikel();
        tasche.id = 1;
        tasche.bezeichnung = "Tasche";
        tasche.version = 1;
        tasche.preis = 50;
        tasche.anzahlWarenkorb = 0;
        var rucksack = new module_1.Artikel();
        rucksack.id = 1;
        rucksack.bezeichnung = "Rucksack";
        rucksack.version = 1;
        rucksack.preis = 50;
        rucksack.anzahlWarenkorb = 0;
        var geldbeutel = new module_1.Artikel();
        geldbeutel.id = 1;
        geldbeutel.bezeichnung = "Geldbeutel";
        geldbeutel.version = 1;
        geldbeutel.preis = 50;
        geldbeutel.anzahlWarenkorb = 0;
        artikel.push(tasche);
        artikel.push(rucksack);
        artikel.push(geldbeutel);
    }
    ArtikelResource.prototype.getAllArtikel = function () {
        return artikel;
    };
    ArtikelResource.prototype.getArtikelById = function (id) {
        for (art in artikel) {
            if (art.id.isEqual(number)) {
                return art;
            }
            else {
                return "Artikel nicht vorhanden";
            }
        }
    };
    return ArtikelResource;
})();
