import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {ArtikelComponent} from '../artikel/artikelComponent';
import {WarenkorbComponent} from '../warenkorb/warenkorbComponent';

@Component({
    selector: 'navbar'
})
@RouteConfig([
    { path: '/warenkorb', component: WarenkorbComponent, as: 'warenkorb'},
    { path: '/artikel', component: ArtikelComponent, as: 'artikel'}
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