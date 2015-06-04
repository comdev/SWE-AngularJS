import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Home} from './home';
import {About} from './about';
import {Product} from './product';

@Component({
    selector: 'app'
})
@RouteConfig([
    { path: '/home', component: Home, as: 'home'},
    { path: '/about', component: About, as: 'about'},
    { path: '/product', component: Product, as: 'product'}
])
@View({
    templateUrl: 'src/app.html',
    directives: [RouterOutlet, RouterLink]
})
export class App {
    constructor() {

    }
}

bootstrap(App, [routerInjectables]);