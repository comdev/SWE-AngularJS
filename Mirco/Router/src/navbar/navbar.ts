
import {View, Component, bootstrap,If} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {ArtikelComponent} from '../artikel/artikelComponent';
import {WarenkorbComponent} from '../warenkorb/warenkorbComponent';
import {Registrierung} from '../kunde/registrierung';
import {Home} from '../home/home';
import {SignInService} from '../kunde/signInService';
import {Kunde} from '../kunde/kunde';

@Component({
    selector: 'navbar'
})
@RouteConfig([
    { path: '/', component: Home, as: 'home'},
    { path: '/home', component: Home, as: 'home'},
    { path: '/warenkorb', component: WarenkorbComponent, as: 'warenkorb'},
    { path: '/artikel', component: ArtikelComponent, as: 'artikel'},
    { path: '/registrierung', component: Registrierung, as: 'registrierung'}
])
@View({
    templateUrl: 'src/navbar/navbar.html',
    directives: [RouterOutlet, RouterLink, If]
})
export class Navbar {
    eingeloggt: boolean;
    logInfailed: boolean;
    kunde: Kunde = new Kunde("","","","");
    constructor() {
        this.eingeloggt = false;
    }
    
    einloggen(email: string, passwort: string){
       let kunde1: Kunde = SignInService.einloggen(email, passwort);
       if(kunde1 !== null){
           this.eingeloggt = true;
           this.logInfailed = false;
           this.kunde = kunde1;
       } else{
           this.logInfailed = true;
       }
    }
    
    ausloggen(){
        this.eingeloggt = false;
        this.kunde = null;
    }
}

bootstrap(Navbar, [routerInjectables]);