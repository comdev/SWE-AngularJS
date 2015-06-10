/**
 * Created by yaelwidmann on 20.05.15.
 */
import { Artikel } from './Artikel';
export declare class ArtikelResource {
    artikel: Array<Artikel>;
    getAllArtikel(): Artikel[];
    getArtikelByName(name: string): Artikel;
}
