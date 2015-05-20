/**
 * Created by yaelwidmann on 16.05.15.
 */
///<reference path='../../../typings/angular2/angular2.d.ts'/>
import{Component,bootstrap,View} from 'angular2/angular2';
import{ArtikelResource};
import{Artikel};
@Component({
    selector:'listArtikel'
})
@View({
    template:
`<ul>
<li *for ="#artikel of artikelArray">
<div class="row">
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-2">{{artikel.bezeichnung}}</div>
<div class="col-xs-2 col-sm-4 col-md-2 col-lg-2">{{artikel.anzahlWarenkorb}}}</div>
<div class="col-xs-3 col-sm-3"><button (click)="onClickBuy(artikel)" class="btn btn-primary btn-md">Kaufen</button></div>
<div class="col-xs-3 col-sm-3"><button (click)="onClickDelete(artikel)" class="btn btn-primary btn-md">Löschen</button></div>
</li>
</ul>
<button (click)="onClickCreateArticle()" class="btn btn-primary btn-md" type="submit">
neuer Artikel anlegen</button>`
})
class ArtikelComponent{
    artikelArray:Array<Artikel>;
    neuerArtikel:boolean;
    artikelResource: ArtikelResource;

    constructor(){
        this.neuerArtikel=false;
        this.artikelResource = new ArtikelResource();
        this.artikelArray=this.artikelResource.getAllArtikel();

    }
    onClickCreateArticle(){
        this.neuerArtikel=true;
    }
    onClickBuy(artikel:Artikel){
        artikel.anzahlWarenkorb=artikel.anzahlWarenkorb+1;
    }
    onClickDelete(artikel:Artikel){
        artikel.anzahlWarenkorb=artikel.anzahlWarenkorb-1;
    }

}
bootstrap(ArtikelComponent);