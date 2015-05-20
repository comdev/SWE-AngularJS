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
var carouselComponent = (function () {
    function carouselComponent() {
    }
    carouselComponent = __decorate([
        angular2_1.Component({
            selector: 'carousel'
        }),
        angular2_1.View({
            template: "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n<ol class=\"carousel-indicators\">\n<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n<li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\n</ol>\n\n    <!-- Wrapper for slides -->\n<div class=\"carousel-inner\" role=\"listbox\">\n<div class=\"item active\">\n<img src=\"img_chania.jpg\" alt=\"Chania\">\n</div>\n\n<div class=\"item\">\n<img src=\"img_chania2.jpg\" alt=\"Chania\">\n</div>\n\n<div class=\"item\">\n<img src=\"img_flower.jpg\" alt=\"Flower\">\n</div>\n\n<div class=\"item\">\n<img src=\"img_flower2.jpg\" alt=\"Flower\">\n</div>\n</div>\n\n    <!-- Left and right controls -->\n<a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n<span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n<span class=\"sr-only\">Previous</span>\n</a>\n<a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n<span class=\"sr-only\">Next</span>\n</a>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], carouselComponent);
    return carouselComponent;
})();
angular2_1.bootstrap(carouselComponent);
