import { Kunde } from './kunde';
export declare class Registrierung {
    kunde: Kunde;
    vollstaendig: boolean;
    constructor();
    signIn(name: string, nachname: string, email: string): void;
}
