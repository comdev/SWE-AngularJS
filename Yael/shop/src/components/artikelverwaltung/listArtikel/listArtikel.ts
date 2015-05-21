/**
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>

import{Component,bootstrap,View, For} from 'angular2/angular2';
import{ArtikelResource} from '../ArtikelResource';
import{Artikel} from '../Artikel';
@Component({
    selector:'listArtikel',
    injectables: [ArtikelResource]
})
@View({
    templateUrl:'components/artikelverwaltung/listArtikel/listArtikel.html',
    directives:[For]
})
export class ArtikelComponent{
    artikelArray:Array<Artikel>;

    constructor(res: ArtikelResource){
        this.artikelArray= res.getAllArtikel();

    }


}
bootstrap(ArtikelComponent);