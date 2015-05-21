/**
 * Created by yaelwidmann on 21.05.15.
 */
import{Component,bootstrap,View, For} from 'angular2/angular2';
import{ArtikelResource} from './ArtikelResource';
import{Artikel} from './Artikel';
@Component({
    selector:'artikel-verwaltung'
})
@View({
    templateUrl:'components/artikelverwaltung/artikelverwaltung.html',
    directives:[For]
})
class artikelController{
    neuerArtikel:boolean;
    constructor(){
        this.neuerArtikel=false;
    }
onClickCreateArticle(){
    this.neuerArtikel=true;
}
}
bootstrap(artikelController);