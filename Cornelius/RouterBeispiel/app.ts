import {View, Component, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Home} from './home';
import {About} from './about';

@Component({
    selector: 'app'
})
@RouteConfig([
    { path: '/home', component: Home, as: 'home'},
    { path: '/about', component: About, as: 'about'}
])
@View({
    template: `
    <h1>TEST</h1><br>
    <a router-link="home">Home</a>
    <a router-link="about">About</a><br>
    <router-outlet></router-outlet>
    `,
    directives: [RouterOutlet, RouterLink]
})
export class App {
    constructor() {

    }
}

bootstrap(App, [routerInjectables]);