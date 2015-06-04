if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../home');
var listArtikel_1 = require('../artikel/listArtikel');
var warenkorb_1 = require('../warenkorb/warenkorb');
var Navbar = (function () {
    function Navbar() {
    }
    Navbar = __decorate([
        angular2_1.Component({
            selector: 'navbar'
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/warenkorb', component: warenkorb_1.Warenkorb, as: 'warenkorb' },
            { path: '/artikel', component: listArtikel_1.ListArtikel, as: 'artikel' }
        ]),
        angular2_1.View({
            templateUrl: 'src/navbar/navbar.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        })
    ], Navbar);
    return Navbar;
})();
exports.Navbar = Navbar;
angular2_1.bootstrap(Navbar, [router_1.routerInjectables]);