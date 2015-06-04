import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {ListArtikelverwaltung} from '../artikelverwaltung/listArtikelverwaltung';
import {ListArtikel} from '../artikel/listArtikel';
import {Warenkorb} from '../warenkorb/warenkorb';

@Component({
    selector: 'navbar'
})
@RouteConfig([
    { path: '/warenkorb', component: Warenkorb, as: 'warenkorb'},
    { path: '/artikel', component: ListArtikel, as: 'artikel'},
    { path: '/artikelverwaltung', component: ListArtikelverwaltung, as: 'artikelverwaltung'}

])
@View({
    templateUrl: 'src/navbar/navbar.html',
    directives: [RouterOutlet, RouterLink]
})
export class Navbar {
    constructor() {

    }
}

bootstrap(Navbar, [routerInjectables]);