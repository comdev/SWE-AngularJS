var artikelResource_1 = require('./artikelResource');
var ArtikelComponent = (function () {
    function ArtikelComponent() {
        console.log("Kontruktor von ArtikelController aufgerufen");
        this.artikelMock = new artikelResource_1.ArtikelResource();
        this.artikel = this.artikelMock.getAllArtikel();
    }
    return ArtikelComponent;
})();
exports.ArtikelComponent = ArtikelComponent;
