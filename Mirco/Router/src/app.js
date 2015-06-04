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
var home_1 = require('./home');
var about_1 = require('./about');
var product_1 = require('./product');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, as: 'home' },
            { path: '/about', component: about_1.About, as: 'about' },
            { path: '/product', component: product_1.Product, as: 'product' }
        ]),
        angular2_1.View({
            templateUrl: 'src/app.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        })
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App, [router_1.routerInjectables]);
