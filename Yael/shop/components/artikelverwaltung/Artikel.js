///<reference path="../../typings/angular2/angular2.d.ts"/>
var Artikel = (function () {
    function Artikel(id, bezeichnung, preis, version, ausgesondert) {
        this.id = id;
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.version = version;
        this.ausgesondert = ausgesondert;
    }
    return Artikel;
})();
exports.Artikel = Artikel;
