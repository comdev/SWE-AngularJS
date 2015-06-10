import { ArtikelResource } from './artikelResource';
import { Artikel } from './artikel';
export declare class ArtikelComponent {
    artikel: Array<Artikel>;
    artikelMock: ArtikelResource;
    constructor();
    addArtikel(artikel: Artikel): void;
}
