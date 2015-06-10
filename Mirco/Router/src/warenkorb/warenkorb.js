/// <reference path="../artikel/artikel.d.ts"/>
var Warenkorb = (function () {
    function Warenkorb(artikel, anzahl) {
        this.artikel = artikel;
        this.anzahl = anzahl;
    }
    return Warenkorb;
})();
exports.Warenkorb = Warenkorb;
