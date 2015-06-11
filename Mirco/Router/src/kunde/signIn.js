/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>
var kundeService_1 = require('./kundeService');
var SignIn = (function () {
    function SignIn() {
        this.listKunde = kundeService_1.KundeService.getAllKunden;
    }
    return SignIn;
})();
exports.SignIn = SignIn;
