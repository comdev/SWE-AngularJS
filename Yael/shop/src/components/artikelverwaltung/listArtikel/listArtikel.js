/**
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>
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
var angular2_1 = require('angular2/angular2');
var ArtikelResource_1 = require('../ArtikelResource');
var ArtikelComponent = (function () {
    function ArtikelComponent(res) {
        this.artikelArray = res.getAllArtikel();
    }
    ArtikelComponent = __decorate([
        angular2_1.Component({
            selector: 'listArtikel',
            injectables: [ArtikelResource_1.ArtikelResource]
        }),
        angular2_1.View({
            templateUrl: 'components/artikelverwaltung/listArtikel/listArtikel.html',
            directives: [angular2_1.For]
        }), 
        __metadata('design:paramtypes', [ArtikelResource_1.ArtikelResource])
    ], ArtikelComponent);
    return ArtikelComponent;
})();
exports.ArtikelComponent = ArtikelComponent;
angular2_1.bootstrap(ArtikelComponent);
