import {View, Component, For} from 'angular2/angular2';

import{Warenkorb} from '../warenkorb/warenkorb';

@Component({
    selector: 'artikelListe',
})
@View({
    templateUrl: 'src/artikel/listArtikel.html', 
	directives: [For]
})

export class ListArtikel {
	artikel: Array<Artikel>;
	warenkorb: Warenkorb
	constructor(){
		this.artikel = [new Artikel('Tisch',10), new Artikel('Stuhl',5)];
		this.warenkorb = new Warenkorb();
	}
	
	addWarenkorb(artikel: Artikel){
		this.warenkorb.add(artikel);
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