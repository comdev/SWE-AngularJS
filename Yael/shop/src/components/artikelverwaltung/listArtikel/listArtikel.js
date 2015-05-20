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
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>
var angular2_1 = require('angular2/angular2');
var module_1 = require();
var ArtikelComponent = (function () {
    function ArtikelComponent() {
        this.neuerArtikel = false;
        this.artikelResource = new module_1.ArtikelResource();
        this.artikelArray = this.artikelResource.getAllArtikel();
    }
    ArtikelComponent.prototype.onClickCreateArticle = function () {
        this.neuerArtikel = true;
    };
    ArtikelComponent.prototype.onClickBuy = function (artikel) {
        artikel.anzahlWarenkorb = artikel.anzahlWarenkorb + 1;
    };
    ArtikelComponent.prototype.onClickDelete = function (artikel) {
        artikel.anzahlWarenkorb = artikel.anzahlWarenkorb - 1;
    };
    ArtikelComponent = __decorate([
        angular2_1.Component({
            selector: 'listArtikel'
        }),
        angular2_1.View({
            template: "<ul>\n<li *for =\"#artikel of artikelArray\">\n<div class=\"row\">\n<div class=\"col-xs-4 col-sm-4 col-md-2 col-lg-2\">{{artikel.bezeichnung}}</div>\n<div class=\"col-xs-2 col-sm-4 col-md-2 col-lg-2\">{{artikel.anzahlWarenkorb}}}</div>\n<div class=\"col-xs-3 col-sm-3\"><button (click)=\"onClickBuy(artikel)\" class=\"btn btn-primary btn-md\">Kaufen</button></div>\n<div class=\"col-xs-3 col-sm-3\"><button (click)=\"onClickDelete(artikel)\" class=\"btn btn-primary btn-md\">L\u00F6schen</button></div>\n</li>\n</ul>\n<button (click)=\"onClickCreateArticle()\" class=\"btn btn-primary btn-md\" type=\"submit\">\nneuer Artikel anlegen</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], ArtikelComponent);
    return ArtikelComponent;
})();
angular2_1.bootstrap(ArtikelComponent);
