/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="../warenkorb/warenkorb.d.ts"/>
/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>
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
var kunde_1 = require('./kunde');
var warenkorb_1 = require('../warenkorb/warenkorb');
var kundeService_1 = require('./kundeService');
var Registrierung = (function () {
    function Registrierung() {
        this.vollstaendig = true;
        this.registriert = false;
        this.passwort = true;
        this.email = true;
    }
    Registrierung.prototype.signIn = function (name, nachname, email, passwort, passwort2) {
        console.log("Aufruf 'Sign In'");
        if (name !== "" && nachname !== "" && email !== "") {
            if (passwort !== passwort2 && passwort !== "") {
                console.log("Passwort stimmt nicht überein.");
                this.passwort = false;
                this.registriert = false;
                this.email = true;
                this.vollstaendig = true;
            }
            else {
                if (kundeService_1.KundeService.getKundeByEmail(email)) {
                    console.log("Kunde gibt es schon");
                    this.email = false;
                    this.passwort = true;
                    this.vollstaendig = true;
                    this.registriert = false;
                }
                else {
                    var kunde = new kunde_1.Kunde(name, nachname, email, passwort);
                    kundeService_1.KundeService.add(kunde);
                    this.vollstaendig = true;
                    this.registriert = true;
                    this.passwort = true;
                    this.email = true;
                    console.log("Kunde wurde angelegt");
                }
            }
        }
        else {
            console.log("Es wurde kein Kunde angelegt");
            this.vollstaendig = false;
        }
    };
    Registrierung = __decorate([
        angular2_1.Component({
            selector: 'registrierung'
        }),
        router_1.RouteConfig([
            { path: '/warenkorb', component: warenkorb_1.Warenkorb, as: 'warenkorb' },
        ]),
        angular2_1.View({
            templateUrl: 'src/kunde/registrierung.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        })
    ], Registrierung);
    return Registrierung;
})();
exports.Registrierung = Registrierung;
