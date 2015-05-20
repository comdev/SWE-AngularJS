/**
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>
import{Component,bootstrap,View} from 'angular2/angular2';
@Component({
    selector:'listArtikel'
})
@View({
    template:
`<ul>
<li *for ="#artikel of artikelArray">
{{artikel}}
</li>
</ul>
<button (click)="onClickCreateArtikel()" class="btn btn-primary btn-md" type="submit">
neuer Artikel anlegen</button>`
})
class ArtikelComponent{
    artikelArray:Array<string>;
    neuerArtikel:boolean;
    artikelResource: ArtikelResource;

    constructor(){
        this.artikelArray=["Fahrrad","Roller","HollandRaeder"];
        this.neuerArtikel=false;
        this.artikelResource = new ArtikelResource();
    }
    onClickCreateArtikel(){
        this.neuerArtikel=true;
    }

}
bootstrap(ArtikelComponent);