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
 * Created by yaelwidmann on 20.05.15.
 */
///<reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var login_1 = require('../login/login');
var App = (function () {
    function App(router) {
        router.config('/home', home_1.Home)
            .then(function () { return router.config('/login', login_1.Login); })
            .then(function () { return router.navigate('/home'); });
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            template: "<router-outlet></router-outlet>",
            directives: [router_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [(typeof Router !== 'undefined' && Router) || Object])
    ], App);
    return App;
})();
exports.App = App;
