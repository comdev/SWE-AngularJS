/*interface IKunde{
    name: string;
    nachname: string;
    email:string;
}*/
var Kunde /*implements IKunde*/ = (function () {
    function Kunde /*implements IKunde*/(name, nachname, email) {
        this.name = name;
        this.nachname = nachname;
        this.email = email;
    }
    return Kunde /*implements IKunde*/;
})();
exports.Kunde /*implements IKunde*/ = Kunde /*implements IKunde*/;
