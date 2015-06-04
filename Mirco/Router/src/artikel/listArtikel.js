if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var warenkorb_1 = require('../warenkorb/warenkorb');
var artikel_1 = require('./artikel');
var ListArtikel = (function () {
    function ListArtikel() {
        var tasche = new artikel_1.Artikel("Tasche", 1);
        var rucksack = new artikel_1.Artikel("Rucksack", 2);
        var geldbeutel = new artikel_1.Artikel("Geldbeutel", 3);
        this.artikel = [];
        this.artikel.push(tasche);
        this.artikel.push(rucksack);
        this.artikel.push(geldbeutel);
        this.warenkorb = new warenkorb_1.Warenkorb();
    }
    ListArtikel.prototype.addArtikel = function (artikel) {
        this.artikel.push(artikel);
    };
    ListArtikel.prototype.getAllArtikel = function () {
        return this.artikel;
    };
    ListArtikel.prototype.addWarenkorb = function (artikel) {
        this.warenkorb.add(artikel);
    };
    ListArtikel = __decorate([
        angular2_1.Component({
            selector: 'artikelListe'
        }),
        angular2_1.View({
            templateUrl: 'src/artikel/listArtikel.html',
            directives: [angular2_1.For]
        })
    ], ListArtikel);
    return ListArtikel;
})();
exports.ListArtikel = ListArtikel;
