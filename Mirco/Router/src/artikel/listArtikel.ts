import {View, Component, For} from 'angular2/angular2';

import{Warenkorb} from '../warenkorb/warenkorb';
import{Artikel} from './artikel';
import{ArtikelResource} from './artikelResource';

@Component({
    selector: 'artikelListe',
})
@View({
    templateUrl: 'src/artikel/listArtikel.html',
	directives: [For]
})

export class ListArtikel {
	liste: Array<Artikel>;
	warenkorb: Warenkorb;
	constructor(){
		
       let tasche= new Artikel("Tasche",1);
        let rucksack= new Artikel("Rucksack",2);
        let geldbeutel= new Artikel("Geldbeutel",3);


        let artikel = [];

        artikel.push(tasche);
        artikel.push(rucksack);
        artikel.push(geldbeutel);
        
        this.liste = artikel;

		this.warenkorb = new Warenkorb();
	}

	addArtikel(artikel: Artikel){
        this.liste.push(artikel);
    }
    
    add(name: string, preis: number){
        this.liste.push(new Artikel(name, preis));
    }

  /**  getAllArtikel(){
        return this.liste.getAllArtikel();
    }**/
	
	addWarenkorb(artikel: Artikel){
		this.warenkorb.add(artikel);
	}
    
    //in den Warenkorb hinzufügen
    addW(name: string, preis: number){
        this.warenkorb.add2(name, preis);
    }
}
