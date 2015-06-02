/**
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>

import{Component,bootstrap,View, For} from 'angular2/angular2';
import{ArtikelResource} from '../ArtikelResource';
import{WarenkorbResource} from '../warenkorb/WarenkorbResource';

import{Artikel} from '../Artikel';
@Component({
    selector:'listArtikel',
    injectables: [ArtikelResource, WarenkorbResource]
})
@View({
    templateUrl:'components/artikelverwaltung/listArtikel/listArtikel.html',
    directives:[For]
})
export class ArtikelComponent{
    artikelArray:Array<Artikel>;
    wres:WarenkorbResource;

    constructor(ares: ArtikelResource, wres:WarenkorbResource){
        this.artikelArray= ares.getAllArtikel();
        this.wres=wres;
    }
    onClickKaufen(artikel:Artikel){
        this.wres.addArtikel(artikel);
    }

}
bootstrap(ArtikelComponent);