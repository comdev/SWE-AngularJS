if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by yaelwidmann on 16.05.15.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
//import{listArtikel} from 'component/artikelverwaltung/artikellist/artikellist';
var home = (function () {
    function home(router) {
        this.logged = false;
        this.router = router;
    }
    home.prototype.logIn = function (name, pw) {
        if (name !== null && pw !== null) {
            this.logged = true;
            this.name = name;
            console.log("Name:" + this.name + " logged " + this.logged);
        }
        console.log("login aufgerufen");
    };
    home = __decorate([
        angular2_1.Component({
            selector: 'home'
        }),
        angular2_1.View({
            url: "components/home/home.html",
            directives: [angular2_1.If]
        })
    ], home);
    return home;
})();
exports.home = home;
