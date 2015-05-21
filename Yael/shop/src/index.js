/**
 * Created by yaelwidmann on 20.05.15.
 */
var app_1 = require('components/app/app');
var angular2_1 = require('angular2/angular2;');
var router_1 = require('angular2/src/router/router');
var pipeline_1 = require('angular2/src/router/pipeline');
var router_2 = require('angular2/router');
angular2_1.bootstrap(app_1.App, [
    bind(router_2.Router).toValue(new router_1.RootRouter(new pipeline_1.Pipeline()))
]);
