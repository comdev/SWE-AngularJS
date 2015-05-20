/**
 * Created by yaelwidmann on 16.05.15.
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
import{Component,View,If,bootstrap} from 'angular2/angular2';
//import{listArtikel} from 'component/artikelverwaltung/artikellist/artikellist';

@Component({
    selector:'home'
})
@View({
    url:"components/home/home.html",
    directives:[If]
})
export class home{
    logged:boolean;
    name:string;
    router:Router;

    constructor(router: Router){
        this.logged = false;
        this.router = router;
    }
    logIn(name:string, pw:string){
        if(name !== null && pw!==null){
            this.logged = true;
            this.name = name;
            console.log("Name:"+this.name+" logged "+this.logged);
        }
        console.log("login aufgerufen");
    }
}