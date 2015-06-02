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
 * Created by yaelwidmann on 18.05.15.
 */
///<reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require('angular2/angular2');
var KundeResource_1 = require('../kundenverwaltung/KundeResource');
var loginComponent = (function () {
    function loginComponent(kundeRes) {
        this.kundeRes = kundeRes;
        this.kunde = null;
        this.eingeloggt = false;
    }
    loginComponent.prototype.onClickLogin = function (name, pw) {
        this.s = this.kundeRes.getKundeById(1);
        this.eingeloggt = true;
        //this.kunde=this.kundeRes.getKundeById(1);
    };
    loginComponent = __decorate([
        angular2_1.Component({
            selector: 'login',
            injectables: [KundeResource_1.KundeResource]
        }),
        angular2_1.View({
            templateUrl: 'components/login/login.html'
        }), 
        __metadata('design:paramtypes', [KundeResource_1.KundeResource])
    ], loginComponent);
    return loginComponent;
})();
angular2_1.bootstrap(loginComponent);
