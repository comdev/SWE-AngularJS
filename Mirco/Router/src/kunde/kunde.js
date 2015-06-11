var Kunde = (function () {
    function Kunde(name, nachname, email, passwort) {
        this.name = name;
        this.nachname = nachname;
        this.email = email;
        this.passwort = passwort;
    }
    return Kunde;
})();
exports.Kunde = Kunde;
