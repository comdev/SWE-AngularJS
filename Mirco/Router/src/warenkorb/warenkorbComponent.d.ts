/// <reference path="../../angular2/angular2.d.ts" />
/// <reference path="../../src/warenkorb/warenkorb.d.ts" />
/// <reference path="../../src/warenkorb/warenkorbResource.d.ts" />
/// <reference path="../../src/artikel/artikel.d.ts" />
import { Warenkorb } from './warenkorb';
import { Artikel } from '../artikel/artikel';
export declare class WarenkorbComponent {
    warenkorb: Array<Warenkorb>;
    constructor();
    add(art: Artikel): void;
    delete(art: Artikel): void;
    gesamtpreis(): number;
    deleteAll(): void;
}
