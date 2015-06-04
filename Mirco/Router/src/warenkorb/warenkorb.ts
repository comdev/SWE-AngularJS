import {View, Component, For} from 'angular2/angular2';

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


interface IArtikel{
	name: string;
	preis: number;
}

export class Artikel implements IArtikel{
	name: string;
	preis: number;
	
	constructor(name: string, preis: number){
		this.name = name;
		this.preis = preis;
	}
}