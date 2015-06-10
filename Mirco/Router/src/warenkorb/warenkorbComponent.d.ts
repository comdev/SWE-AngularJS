import { Artikel } from '../artikel/artikel';
export declare class Warenkorb {
    warenkorb: Array<Artikel>;
    gesamtPreis: number;
    anzahl: Array<number>;
    constructor();
    add(artikel: Artikel): void;
    add2(name: string, preis: number): void;
    delete(artikel: Artikel): void;
    getGesamtPreis(): number;
    getWarenkorb(): any[];
    getWaren(): Artikel[];
    notIn(warenkorb: Array<Artikel>, artikel: Artikel): number;
}
