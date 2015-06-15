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
    passwort: boolean; 
    email: boolean;

    constructor(){
        this.vollstaendig = true;
        this.registriert = false;
        this.passwort = true;
        this.email = true;
    }

    signIn(name:string, nachname:string, email:string, passwort: string, passwort2: string){
        console.log("Aufruf 'Sign In'");
        if (name!== "" && nachname!== "" && email !== ""){
            if (passwort !== passwort2 && passwort !== ""){
                console.log("Passwort stimmt nicht überein.")
                this.passwort = false;
                this.registriert = false;
                this.email = true;
                this.vollstaendig = true;
            }
            else {
                if (KundeService.getKundeByEmail(email)) {
                    console.log("Kunde gibt es schon")
                    this.email = false;
                    this.passwort = true;
                    this.vollstaendig = true;
                    this.registriert = false;
                }
                else {
                    let kunde = new Kunde(name,nachname,email,passwort);
                    KundeService.add(kunde);
                    this.vollstaendig = true;
                    this.registriert = true;
                    this.passwort = true;
                    this.email = true;
                    console.log("Kunde wurde angelegt");
                }
            }
        }
        else {
            console.log("Es wurde kein Kunde angelegt");
            this.vollstaendig=false;
        }
    }
}

