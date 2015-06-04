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
var artikelResource_1 = require('./artikelResource');
var ListArtikel = (function () {
    function ListArtikel(liste) {
        /* let tasche= new Artikel("Tasche",1);
         let rucksack= new Artikel("Rucksack",2);
         let geldbeutel= new Artikel("Geldbeutel",3);
 
 
         this.artikel = [];
 
         this.artikel.push(tasche);
         this.artikel.push(rucksack);
         this.artikel.push(geldbeutel);*/
        this.liste = liste;
        this.warenkorb = new warenkorb_1.Warenkorb();
    }
    ListArtikel.prototype.addArtikel = function (artikel) {
        this.liste.addArtikel(artikel);
    };
    ListArtikel.prototype.getAllArtikel = function () {
        return this.liste.getAllArtikel();
    };
    ListArtikel.prototype.addWarenkorb = function (artikel) {
        this.warenkorb.add(artikel);
    };
    ListArtikel = __decorate([
        angular2_1.Component({
            selector: 'artikelListe',
            injectables: [artikelResource_1.ArtikelResource]
        }),
        angular2_1.View({
            templateUrl: 'src/artikel/listArtikel.html',
            directives: [angular2_1.For]
        })
    ], ListArtikel);
    return ListArtikel;
})();
exports.ListArtikel = ListArtikel;
