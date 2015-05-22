var WarenkorbResource = (function () {
    function WarenkorbResource() {
        this.artikel = new Array();
    }
    WarenkorbResource.prototype.addArtikel = function (artikel) {
        this.artikel.push(artikel);
    };
    return WarenkorbResource;
})();
exports.WarenkorbResource = WarenkorbResource;
