/**
 * Created by yaelwidmann on 21.05.15.
 */
import{Component,bootstrap,View, For} from 'angular2/angular2';
import{ArtikelResource} from '../ArtikelResource';
import{ArtikelComponent} from '../listArtikel/listArtikel';

import{Artikel} from '../Artikel';
@Component({
    selector:'createArtikel',
    injectables:[ArtikelResource]
})
@View({
    templateUrl:'components/artikelverwaltung/createArtikel/createArtikel.html',
    directives:[For]
})
class ArtikelEditComponent{
    bezeichnung:string;
    preis:number;
    version:number;
    ausgesondert:boolean;
    artikelResource:ArtikelResource;

    constructor(artikelRes: ArtikelResource){
        this.artikelResource = artikelRes;
    }
    onClickCreate(bezeichnung:string, preis:number,version:number){
        this.bezeichnung=bezeichnung;
        this.preis=preis;
        this.version=version;
        this.ausgesondert=false;
        let artikel = new Artikel(6, this.bezeichnung, this.preis, this.version,this.ausgesondert);
        this.artikelResource.addArtikel(artikel);
    }

}
bootstrap(ArtikelEditComponent);