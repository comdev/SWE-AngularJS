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
///<reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require('angular2/angular2');
var navComponent = (function () {
    function navComponent() {
        this.name = 'Alice';
    }
    navComponent = __decorate([
        angular2_1.Component({
            selector: "nav-bar"
        }),
        angular2_1.View({ template: "<nav class=\"navbar navbar-default\">\n<div class=\"container-fluid\">\n<div class=\"navbar-header\">\n<a class=\"navbar-brand\" href=\"#\">Webshop</a>\n</div>\n<div>\n    <ul class=\"nav navbar-nav\">\n<li class=\"active\"><a href=\"home.html\">Home</a></li>\n<li><a href=\"artikel.html\">Unsere Artikel</a></li>\n<li><a href=\"bestellung.html\">Ihre Bestellungen</a></li>\n<li><a href=\"kunde.htmml\">Alle Kunden</a></li>\n</ul>\n</div>\n</div>\n</nav>" }), 
        __metadata('design:paramtypes', [])
    ], navComponent);
    return navComponent;
})();
angular2_1.bootstrap(navComponent);
