import {View, Component, For, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Kunde} from './kunde';
import{Warenkorb} from '../warenkorb/warenkorb';

@Component({
    selector: 'registrierung'
})
@RouteConfig([
    { path: '/warenkorb', component: Warenkorb, as: 'warenkorb'},
])
@View({
    templateUrl: 'src/kunde/registrierung.html',
    directives: [RouterOutlet, RouterLink]
})

export class Registrierung {
    kunde: Kunde;
    vollstaendig: boolean;
    constructor(){
        this.vollstaendig=true;
    }

    signIn(name:string, nachname:string, email:string){
        if(name!== null && nachname!==null && email !== null){
            let kunde = new Kunde(name,nachname,email);
            this.kunde = kunde;
        }else{
            this.vollstaendig=false;
        }
    }
}
bootstrap(Registrierung, [routerInjectables]);
