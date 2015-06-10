/// <reference path="../../src/artikel/artikel.d.ts" />
import { Artikel } from '../artikel/artikel';
export declare class Warenkorb {
    artikel: Artikel;
    anzahl: number;
    constructor(artikel: Artikel, anzahl: number);
}
