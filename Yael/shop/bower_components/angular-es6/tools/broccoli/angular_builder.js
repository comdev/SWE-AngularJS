var broccoli = require('broccoli');
var fse = require('fs-extra');
var makeBrowserTree = require('./trees/browser_tree');
var makeNodeTree = require('./trees/node_tree');
var makeDartTree = require('./trees/dart_tree');
var path = require('path');
var printSlowTrees = require('broccoli-slow-trees');
var Q = require('q');
/**
 * BroccoliBuilder facade for all of our build pipelines.
 */
var AngularBuilder = (function () {
    function AngularBuilder(outputPath) {
        this.outputPath = outputPath;
    }
    AngularBuilder.prototype.rebuildBrowserDevTree = function () {
        this.browserDevBuilder = this.browserDevBuilder || this.makeBrowserDevBuilder();
        return this.rebuild(this.browserDevBuilder);
    };
    AngularBuilder.prototype.rebuildBrowserProdTree = function () {
        this.browserProdBuilder = this.browserProdBuilder || this.makeBrowserProdBuilder();
        return this.rebuild(this.browserProdBuilder);
    };
    AngularBuilder.prototype.rebuildNodeTree = function () {
        this.nodeBuilder = this.nodeBuilder || this.makeNodeBuilder();
        return this.rebuild(this.nodeBuilder);
    };
    AngularBuilder.prototype.rebuildDartTree = function () {
        this.dartBuilder = this.dartBuilder || this.makeDartBuilder();
        return this.rebuild(this.dartBuilder);
    };
    AngularBuilder.prototype.cleanup = function () {
        return Q.all([
            this.nodeBuilder && this.nodeBuilder.cleanup(),
            this.browserDevBuilder && this.browserDevBuilder.cleanup(),
            this.browserProdBuilder && this.browserProdBuilder.cleanup()
        ]);
    };
    AngularBuilder.prototype.makeBrowserDevBuilder = function () {
        var tree = makeBrowserTree({ name: 'dev', typeAssertions: true }, path.join(this.outputPath, 'js', 'dev'));
        return new broccoli.Builder(tree);
    };
    AngularBuilder.prototype.makeBrowserProdBuilder = function () {
        var tree = makeBrowserTree({ name: 'prod', typeAssertions: false }, path.join(this.outputPath, 'js', 'prod'));
        return new broccoli.Builder(tree);
    };
    AngularBuilder.prototype.makeNodeBuilder = function () {
        var tree = makeNodeTree(path.join(this.outputPath, 'js', 'cjs'));
        return new broccoli.Builder(tree);
    };
    AngularBuilder.prototype.makeDartBuilder = function () {
        var tree = makeDartTree(path.join(this.outputPath, 'dart'));
        return new broccoli.Builder(tree);
    };
    AngularBuilder.prototype.rebuild = function (builder) {
        return builder.build()
            .then(function (result) { printSlowTrees(result.graph); })
            .catch(function (err) {
            console.error(err.toString());
            // Should show file and line/col if present
            if (err.file) {
                console.error('File: ' + err.file);
            }
            if (err.stack) {
                console.error(err.stack);
            }
            throw err;
        });
    };
    return AngularBuilder;
})();
exports.AngularBuilder = AngularBuilder;
//# sourceMappingURL=angular_builder.js.map