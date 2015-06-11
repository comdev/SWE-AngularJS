import { Kunde } from '../kunde/kunde';
export declare class Navbar {
    eingeloggt: boolean;
    logInfailed: boolean;
    kunde: Kunde;
    constructor();
    einloggen(email: string, passwort: string): void;
    ausloggen(): void;
}
