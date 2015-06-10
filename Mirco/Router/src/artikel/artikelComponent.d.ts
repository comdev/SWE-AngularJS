/// <reference path="../../angular2/angular2.d.ts" />
/// <reference path="../../src/artikel/artikelResource.d.ts" />
/// <reference path="../../src/artikel/artikel.d.ts" />
import { Artikel } from './artikel';
export declare class ArtikelComponent {
    artikel: Array<Artikel>;
    constructor();
    addArtikel(name: string, price: number): void;
}
