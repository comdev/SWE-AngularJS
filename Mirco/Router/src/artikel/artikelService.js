var artikelResource_1 = require('./artikelResource');
exports.ArtikelService = {
    add: function (artikel) {
        if (!artikel) {
            return;
        }
        var artikelMock = new artikelResource_1.ArtikelResource();
        artikelMock.artikel.push(artikel);
    }
};
