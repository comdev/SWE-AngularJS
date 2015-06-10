/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="warenkorb.d.ts"/>
/// <reference path="warenkorbResource.d.ts"/>
/// <reference path="../artikel/artikel.d.ts"/>
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var warenkorbResource_1 = require('./warenkorbResource');
var WarenkorbComponent = (function () {
    function WarenkorbComponent() {
        this.warenkorb = warenkorbResource_1.WarenkorbResource.getWarenkorb();
    }
    WarenkorbComponent.prototype.add = function (art) {
        warenkorbResource_1.WarenkorbResource.add(art);
    };
    WarenkorbComponent.prototype.delete = function (art) {
        warenkorbResource_1.WarenkorbResource.delete(art);
    };
    WarenkorbComponent.prototype.gesamtpreis = function () {
        return warenkorbResource_1.WarenkorbResource.getGesamtpreis();
    };
    WarenkorbComponent = __decorate([
        angular2_1.Component({
            selector: 'warenkorbComponent'
        }),
        angular2_1.View({
            templateUrl: 'src/warenkorb/warenkorbComponent.html',
            directives: [angular2_1.For]
        })
    ], WarenkorbComponent);
    return WarenkorbComponent;
})();
exports.WarenkorbComponent = WarenkorbComponent;
