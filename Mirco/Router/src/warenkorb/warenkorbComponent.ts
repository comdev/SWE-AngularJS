import {View, Component, For} from 'angular2/angular2';
import {Warenkorb} from './warenkorb';
import {WarenkorbResource} from './warenkorbResource';
import {Artikel} from '../artikel/artikel';

@Component({
    selector: 'warenkorbComponent'
})
@View({
    templateUrl: 'src/warenkorb/warenkorb.html', 
	directives: [For]
})

export class WarenkorbComponent {
	warenkorb: Array<Warenkorb>;
    gesamtPreis: number;
 	constructor(){
		this.warenkorb = WarenkorbResource.getWarenkorb();
        this.gesamtPreis = WarenkorbResource.getGesamtPreis();
	}
    add(art: Artikel){
        WarenkorbResource.add(art);
    }
    delete(art: Artikel){
        WarenkorbResource.delete(art);
    }
}


