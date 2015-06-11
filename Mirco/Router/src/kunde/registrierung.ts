/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="../warenkorb/warenkorb.d.ts"/>
/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>


import {View, Component, For} from 'angular2/angular2';
import {Router, RouterOutlet, RouterLink, RouteConfig, RouteParams, routerInjectables} from 'angular2/router';
import {Kunde} from './kunde';
import{Warenkorb} from '../warenkorb/warenkorb';
import {KundeService} from './kundeService';


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
    registriert: boolean; 

    constructor(){
        this.vollstaendig = true;
        this.registriert = false;
    }

    signIn(name:string, nachname:string, email:string){
        console.log("Aufruf 'Sign In'");
        if(name!== "" && nachname!== "" && email !== ""){
            let kunde = new Kunde(name,nachname,email);
            KundeService.add(kunde);
            this.vollstaendig = true;
            this.registriert = true;
            console.log("Kunde wurde angelegt");
        }else{
            console.log("Es wurde kein Kunde angelegt");
            this.vollstaendig=false;
        }
    }
}

