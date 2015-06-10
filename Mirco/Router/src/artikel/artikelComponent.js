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
var artikelService_1 = require('./artikelService');
var ArtikelComponent = (function () {
    function ArtikelComponent() {
        console.log("Kontruktor von ArtikelController aufgerufen");
        this.artikelMock = new artikelResource_1.ArtikelResource();
        this.artikel = this.artikelMock.getAllArtikel();
    }
    ArtikelComponent.prototype.addArtikel = function (artikel) {
        artikelService_1.ArtikelService.add(artikel);
    };
    ArtikelComponent = __decorate([
        angular2_1.Component({
            selector: 'artikelComponent'
        }),
        angular2_1.View({
            templateUrl: 'src/artikel/listArtikel.html',
            directives: [angular2_1.For]
        })
    ], ArtikelComponent);
    return ArtikelComponent;
})();
exports.ArtikelComponent = ArtikelComponent;
