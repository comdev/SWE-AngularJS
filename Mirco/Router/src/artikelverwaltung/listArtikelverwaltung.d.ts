import { Warenkorb } from '../warenkorb/warenkorb';
import { Artikel } from '../artikel/artikel';
export declare class ListArtikelverwaltung {
    liste: Array<Artikel>;
    warenkorb: Warenkorb;
    constructor();
    addArtikel(artikel: Artikel): void;
    /**  getAllArtikel(){
          return this.liste.getAllArtikel();
      }**/
    addWarenkorb(artikel: Artikel): void;
}
