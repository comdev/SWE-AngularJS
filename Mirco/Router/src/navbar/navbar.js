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
var artikelComponent_1 = require('../artikel/artikelComponent');
var warenkorbComponent_1 = require('../warenkorb/warenkorbComponent');
var registrierung_1 = require('../kunde/registrierung');
var home_1 = require('../home/home');
var signInService_1 = require('../kunde/signInService');
var kunde_1 = require('../kunde/kunde');
var Navbar = (function () {
    function Navbar() {
        this.kunde = new kunde_1.Kunde("", "", "", "");
        this.eingeloggt = false;
    }
    Navbar.prototype.einloggen = function (email, passwort) {
        var kunde1 = signInService_1.SignInService.einloggen(email, passwort);
        if (kunde1 !== null) {
            this.eingeloggt = true;
            this.logInfailed = false;
            this.kunde = kunde1;
        }
        else {
            this.logInfailed = true;
        }
    };
    Navbar.prototype.ausloggen = function () {
        this.eingeloggt = false;
        this.kunde = new kunde_1.Kunde("", "", "", "");
        var inputValue = document.getElementById('InputE').value;
        inputValue = "";
        var inputValue = document.getElementById('InputP').value;
        inputValue = "";
    };
    Navbar = __decorate([
        angular2_1.Component({
            selector: 'navbar'
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, as: 'home' },
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/warenkorb', component: warenkorbComponent_1.WarenkorbComponent, as: 'warenkorb' },
            { path: '/artikel', component: artikelComponent_1.ArtikelComponent, as: 'artikel' },
            { path: '/registrierung', component: registrierung_1.Registrierung, as: 'registrierung' }
        ]),
        angular2_1.View({
            templateUrl: 'src/navbar/navbar.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink, angular2_1.If]
        })
    ], Navbar);
    return Navbar;
})();
exports.Navbar = Navbar;
angular2_1.bootstrap(Navbar, [router_1.routerInjectables]);
