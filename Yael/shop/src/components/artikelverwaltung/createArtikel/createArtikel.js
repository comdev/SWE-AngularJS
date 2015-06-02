if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yaelwidmann on 21.05.15.
 */
var angular2_1 = require('angular2/angular2');
var ArtikelResource_1 = require('../ArtikelResource');
var Artikel_1 = require('../Artikel');
var ArtikelEditComponent = (function () {
    function ArtikelEditComponent(artikelRes) {
        this.artikelResource = artikelRes;
    }
    ArtikelEditComponent.prototype.onClickCreate = function (bezeichnung, preis, version) {
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.version = version;
        this.ausgesondert = false;
        var artikel = new Artikel_1.Artikel(6, this.bezeichnung, this.preis, this.version, this.ausgesondert);
        this.artikelResource.addArtikel(artikel);
    };
    ArtikelEditComponent = __decorate([
        angular2_1.Component({
            selector: 'createArtikel',
            injectables: [ArtikelResource_1.ArtikelResource]
        }),
        angular2_1.View({
            templateUrl: 'components/artikelverwaltung/createArtikel/createArtikel.html',
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [ArtikelResource_1.ArtikelResource])
    ], ArtikelEditComponent);
    return ArtikelEditComponent;
})();
angular2_1.bootstrap(ArtikelEditComponent);
