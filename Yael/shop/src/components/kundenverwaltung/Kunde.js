var Kunde = (function () {
    function Kunde(id, vorname, nachname, email, adresse) {
        this.id = id;
        this.vorname = vorname;
        this.nachname = nachname;
        this.email = email;
        this.adresse = adresse;
    }
    return Kunde;
})();
exports.Kunde = Kunde;
