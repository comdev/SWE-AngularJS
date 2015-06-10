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
        this.warenkorb = this.getWarenkorb();
        this.gesamtPreis = this.getGesamtPreis();
    }
    Warenkorb.prototype.add = function (artikel) {
        var position = this.notIn(this.warenkorb, artikel);
        if (position === -1) {
            this.warenkorb.push(artikel);
            this.anzahl.push(1);
        }
        else {
            this.anzahl[position] = this.anzahl[position] + 1;
        }
        this.gesamtPreis = this.getGesamtPreis();
    };
    //Versuch ohne Artikel sondern mit dem Attributen
    Warenkorb.prototype.add2 = function (name, preis) {
        this.add(new artikel_1.Artikel(name, preis));
    };
    Warenkorb.prototype.delete = function (artikel) {
        var position = this.notIn(this.warenkorb, artikel);
        if (position !== -1) {
            var anzahl = this.anzahl[position];
            if (anzahl !== 1) {
                this.anzahl[position] = this.anzahl[position] - 1;
            }
            else {
                var neuerwarenkorb = [];
                var neueanzahl = [];
                for (var i = 0; i < this.warenkorb.length; i++) {
                    if (this.warenkorb[i].name !== artikel.name) {
                        neuerwarenkorb.push(this.warenkorb[i]);
                        neueanzahl.push(this.anzahl[i]);
                    }
                }
                this.warenkorb = neuerwarenkorb;
                this.anzahl = neueanzahl;
            }
        }
        this.gesamtPreis = this.getGesamtPreis();
    };
    Warenkorb.prototype.getGesamtPreis = function () {
        var i = 0;
        var gespreis = 0;
        for (i; i < this.warenkorb.length; i++) {
            gespreis = gespreis + this.warenkorb[i].preis * this.anzahl[i];
        }
        return gespreis;
    };
    Warenkorb.prototype.getWarenkorb = function () {
        var waren = this.getWaren();
        var anzahl = [];
        var warenkorb = [];
        var i = 0;
        for (i; i < waren.length; i++) {
            var position = this.notIn(warenkorb, waren[i]);
            if (position === -1) {
                warenkorb.push(waren[i]);
                anzahl.push(1);
            }
            else {
                anzahl[position] = anzahl[position] + 1;
            }
        }
        this.anzahl = anzahl;
        return warenkorb;
    };
    Warenkorb.prototype.getWaren = function () {
        var warenkorb = [new artikel_1.Artikel('Tisch', 10), new artikel_1.Artikel('Tisch', 10), new artikel_1.Artikel('Stuhl', 8), new artikel_1.Artikel('Stuhl', 8)];
        return warenkorb;
    };
    Warenkorb.prototype.notIn = function (warenkorb, artikel) {
        for (var i = 0; i < warenkorb.length; i++) {
            if (warenkorb[i].name === artikel.name) {
                return i;
            }
        }
        return -1;
    };
    Warenkorb = __decorate([
        angular2_1.Component({
            selector: 'warenkorb'
        }),
        angular2_1.View({
            templateUrl: 'src/warenkorb/warenkorb.html',
            directives: [angular2_1.For]
        })
    ], Warenkorb);
    return Warenkorb;
})();
exports.Warenkorb = Warenkorb;
