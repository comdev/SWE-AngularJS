import { Warenkorb } from '../warenkorb/warenkorb';
import { Artikel } from './artikel';
export declare class ListArtikel {
    liste: Array<Artikel>;
    warenkorb: Warenkorb;
    constructor();
    addArtikel(artikel: Artikel): void;
    add(name: string, preis: number): void;
    /**  getAllArtikel(){
          return this.liste.getAllArtikel();
      }**/
    addWarenkorb(artikel: Artikel): void;
    addW(name: string, preis: number): void;
}
