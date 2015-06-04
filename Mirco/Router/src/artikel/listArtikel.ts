import {View, Component, For} from 'angular2/angular2';

import{Warenkorb} from '../warenkorb/warenkorb';
import{Artikel} from './artikel';

@Component({
    selector: 'artikelListe'
})
@View({
    templateUrl: 'src/artikel/listArtikel.html', 
	directives: [For]
})

export class ListArtikel {
	artikel: Array<Artikel>;
	warenkorb: Warenkorb
	constructor(){
		
        let tasche= new Artikel("Tasche",1);
        let rucksack= new Artikel("Rucksack",2);
        let geldbeutel= new Artikel("Geldbeutel",3);


        this.artikel = [];

        this.artikel.push(tasche);
        this.artikel.push(rucksack);
        this.artikel.push(geldbeutel);

		this.warenkorb = new Warenkorb();
	}
	
	addArtikel(artikel: Artikel){
        this.artikel.push(artikel)
    }

    getAllArtikel(){
        return this.artikel;
    }
	
	addWarenkorb(artikel: Artikel){
		this.warenkorb.add(artikel);
	}
}
