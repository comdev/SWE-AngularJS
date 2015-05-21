/**
 * Created by yaelwidmann on 18.05.15.
 */
///<reference path="../../typings/angular2/angular2.d.ts"/>
import{Component,View, bootstrap} from 'angular2/angular2';
import{KundeResource} from '../kundenverwaltung/KundeResource';
import{Kunde} from '../kundenverwaltung/Kunde';

@Component({
    selector:'login',
    injectables:[KundeResource, Kunde]
})
@View({
    templateUrl:'components/login/login'
})
class loginComponent{
    s:string;
    kunde:Kunde;
    kundeRes:KundeResource;
    eingeloggt:boolean;

    constructor(kundeRes:KundeResource){
        this.kundeRes= kundeRes;
        this.kunde=null;
        this.eingeloggt = false;
    }
    onClickLogin(name:string, pw:string){
        this.s=this.kundeRes.getKundeById(1);
        this.eingeloggt = true;
        //this.kunde=this.kundeRes.getKundeById(1);

    }
}
bootstrap(loginComponent);