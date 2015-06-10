/*interface IArtikel{
    name: string;
    preis: number;
}*/
var Artikel /*implements IArtikel*/ = (function () {
    function Artikel /*implements IArtikel*/(name, preis) {
        this.name = name;
        this.preis = preis;
    }
    return Artikel /*implements IArtikel*/;
})();
exports.Artikel /*implements IArtikel*/ = Artikel /*implements IArtikel*/;
