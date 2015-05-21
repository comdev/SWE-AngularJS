///<reference path="../../typings/angular2/angular2.d.ts"/>
import{View, bootstrap, Component, RouteConfig} from 'angular2/angular2';
import{ArtikelComponent} from '../artikelverwaltung/listArtikel/listArtikel';
@Component({
    selector: "nav-bar"
})
@View({
    templateUrl:'components/navbar/navbar.html'
})
/*@RouteConfig({
    path:'/listArtikel',
    component:ArtikelComponent,
    alias: 'listArtikel'
})*/
class navComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}
bootstrap(navComponent);