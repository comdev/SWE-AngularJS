/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>
var kundeService_1 = require('./kundeService');
exports.SignInService = {
    einloggen: function (email, passwort) {
        if (email !== "" && passwort !== "") {
            var kunde = kundeService_1.KundeService.getKundeByEmail(email);
            if (!kunde || kunde.passwort !== passwort) {
                return null;
            }
            else {
                return kunde;
            }
        }
        return null;
    }
};
