if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by yaelwidmann on 21.05.15.
 */
var angular2_1 = require('angular2/angular2');
var artikelController = (function () {
    function artikelController() {
        this.neuerArtikel = false;
    }
    artikelController.prototype.onClickCreateArticle = function () {
        this.neuerArtikel = true;
    };
    artikelController = __decorate([
        angular2_1.Component({
            selector: 'artikel-verwaltung'
        }),
        angular2_1.View({
            templateUrl: 'components/artikelverwaltung/artikelverwaltung.html',
            directives: []
        })
    ], artikelController);
    return artikelController;
})();
angular2_1.bootstrap(artikelController);
