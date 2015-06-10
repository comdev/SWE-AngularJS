import {Artikel} from '../artikel/artikel';

export class Warenkorb {
    artikel: Artikel;
    anzahl: number;

    constructor(artikel: Artikel, anzahl: number){
        this.artikel = artikel;
        this.anzahl = anzahl;
    }
}