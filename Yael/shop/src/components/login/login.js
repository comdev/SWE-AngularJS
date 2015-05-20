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
var loginComponent = (function () {
    function loginComponent() {
    }
    loginComponent.prototype.onCLickLogin = function (name, pw) {
    };
    loginComponent = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            template: "<div class=\"container\">\n<div class=\"row\">\n<input #name type=\"text\"  placeholder=\"Email\" required autofocus>\n<input #pw type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n<button (click)=\"onClickLogin(name.value, pw.value)\" class=\"btn btn-primary btn-md\" type=\"submit\">\nLogin</button>\n<a href=\"#\" class=\"pull-right need-help\">Brauchen Sie Hilfe? </a><span class=\"clearfix\"></span>\n</div>\n<a href=\"#\" class=\"text-center new-account\">Sign in</a>\n</div>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], loginComponent);
    return loginComponent;
})();
angular2_1.bootstrap(loginComponent);
