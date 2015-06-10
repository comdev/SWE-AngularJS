/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="warenkorb.d.ts"/>
/// <reference path="warenkorbResource.d.ts"/>
/// <reference path="../artikel/artikel.d.ts"/>

import {View, Component, For} from 'angular2/angular2';
import {Warenkorb} from './warenkorb';
import {WarenkorbResource} from './warenkorbResource';
import {Artikel} from '../artikel/artikel';

@Component({
    selector: 'warenkorbComponent'
})
@View({
    templateUrl: 'src/warenkorb/warenkorbComponent.html', 
	directives: [For]
})

export class WarenkorbComponent {
	warenkorb: Array<Warenkorb>;
 	constructor(){
		this.warenkorb = WarenkorbResource.getWarenkorb();
	}
    add(art: Artikel){
        WarenkorbResource.add(art);
    }
    delete(art: Artikel){
        WarenkorbResource.delete(art);
    }
    gesamtpreis(): number{
        return WarenkorbResource.getGesamtpreis();
    }
}


