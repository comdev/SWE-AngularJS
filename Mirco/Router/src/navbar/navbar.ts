import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Home} from '../home';
import {About} from '../about';
import {ListArtikel} from '../artikel/listArtikel';
import {Warenkorb} from '../warenkorb/warenkorb';

@Component({
    selector: 'navbar'
})
@RouteConfig([
    { path: '/home', component: Home, as: 'home'},
    { path: '/warenkorb', component: Warenkorb, as: 'warenkorb'},
    { path: '/artikel', component: ListArtikel, as: 'artikel'}
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