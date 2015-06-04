if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var artikel_1 = require('../artikel/artikel');
var Warenkorb = (function () {
    function Warenkorb() {
        this.warenkorb = [new artikel_1.Artikel('Tisch', 10)];
    }
    Warenkorb.prototype.add = function (artikel) {
        this.warenkorb.push();
    };
    Warenkorb = __decorate([
        angular2_1.Component({
            selector: 'warenkorb',
        }),
        angular2_1.View({
            templateUrl: 'src/warenkorb/warenkorb.html',
            directives: [angular2_1.For]
        })
    ], Warenkorb);
    return Warenkorb;
})();
exports.Warenkorb = Warenkorb;
