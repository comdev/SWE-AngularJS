/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="artikelResource.d.ts"/>
/// <reference path="artikel.d.ts"/>
/// <reference path="../warenkorb/warenkorbResource.d.ts"/>
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var artikelResource_1 = require('./artikelResource');
var artikel_1 = require('./artikel');
var warenkorbResource_1 = require('../warenkorb/warenkorbResource');
var ArtikelComponent = (function () {
    function ArtikelComponent() {
        console.log("Kontruktor von ArtikelComponent aufgerufen");
        this.artikel = artikelResource_1.ArtikelResource.getAllArtikel();
        this.hinzugefuegt = false;
        this.geklappt = true;
    }
    ArtikelComponent.prototype.addArtikel = function (name, price) {
        console.log("AddArtikel wird aufgerufen");
        var artikel = new artikel_1.Artikel(name, price);
        if (!isNaN(artikel.preis) && artikel.preis > 0) {
            artikelResource_1.ArtikelResource.add(artikel);
            this.hinzugefuegt = true;
            this.geklappt = true;
        }
        else {
            this.hinzugefuegt = false;
            this.geklappt = false;
        }
    };
    ArtikelComponent.prototype.toWarenkorb = function (artikel) {
        console.log("Add to Warenkorb");
        warenkorbResource_1.WarenkorbResource.add(artikel);
    };
    ArtikelComponent = __decorate([
        angular2_1.Component({
            selector: 'artikelComponent'
        }),
        angular2_1.View({
            templateUrl: 'src/artikel/artikelComponent.html',
            directives: [angular2_1.For]
        })
    ], ArtikelComponent);
    return ArtikelComponent;
})();
exports.ArtikelComponent = ArtikelComponent;
