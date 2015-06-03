/**
 * Created by yaelwidmann on 22.05.15.
 */
import{Component,bootstrap,View, For} from 'angular2/angular2';

import{Artikel} from '../Artikel';

export class WarenkorbResource{
    artikel: Array<Artikel>;
    constructor(){
        this.artikel=new Array<Artikel>();
    }
    addArtikel(artikel){
        this.artikel.push(artikel);
    }

}