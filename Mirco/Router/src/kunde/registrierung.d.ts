/// <reference path="../../angular2/angular2.d.ts" />
/// <reference path="../../src/warenkorb/warenkorb.d.ts" />
/// <reference path="../../src/kunde/kunde.d.ts" />
/// <reference path="../../src/kunde/kundeService.d.ts" />
import { Kunde } from './kunde';
export declare class Registrierung {
    kunde: Kunde;
    vollstaendig: boolean;
    registriert: boolean;
    constructor();
    signIn(name: string, nachname: string, email: string): void;
}
