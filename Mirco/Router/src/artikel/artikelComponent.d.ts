/// <reference path="../../angular2/angular2.d.ts" />
/// <reference path="../../src/artikel/artikelResource.d.ts" />
/// <reference path="../../src/artikel/artikel.d.ts" />
/// <reference path="../../src/warenkorb/warenkorbResource.d.ts" />
import { Artikel } from './artikel';
export declare class ArtikelComponent {
    artikel: Array<Artikel>;
    hinzugefuegt: boolean;
    geklappt: boolean;
    constructor();
    addArtikel(name: string, price: number): void;
    toWarenkorb(artikel: Artikel): void;
}
