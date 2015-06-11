import {View, Component, bootstrap} from 'angular2/angular2';
import {Artikel} from '../artikel/artikel';
import {WarenkorbResource}from '../warenkorb/warenkorbResource';

@Component({
    selector: 'home'
})
@View({
    templateUrl: "src/home/home.html"
})

export class Home {
    add(name: string, preis:number){
        WarenkorbResource.add(new Artikel(name, preis));
    }
}