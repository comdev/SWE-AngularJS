import {View, Component, For} from 'angular2/angular2';
import {Artikel} from '../artikel/artikel';

@Component({
    selector: 'warenkorb',
})
@View({
    templateUrl: 'src/warenkorb/warenkorb.html', 
	directives: [For]
})

export class Warenkorb {
	warenkorb: Array<Artikel>;
	constructor(){
		this.warenkorb = [new Artikel('Tisch',10)];
	}
	add(artikel: Artikel){
		this.warenkorb.push()
	}
}


