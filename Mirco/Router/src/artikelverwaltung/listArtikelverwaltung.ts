import {View, Component, For} from 'angular2/angular2';

import{Warenkorb} from '../warenkorb/warenkorb';
import{Artikel} from '../artikel/artikel';
import{ArtikelResource} from '../artikel/artikelResource';

@Component({
    selector: 'artikelListe',
})
@View({
    templateUrl: 'src/artikelverwaltung/listArtikelverwaltung.html',
	directives: [For]
})

export class ListArtikelverwaltung {
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

		this.warenkorb = new Warenkorb;
	}

	addArtikel(artikel: Artikel){
        this.liste.push(artikel);
    }

  /**  getAllArtikel(){
        return this.liste.getAllArtikel();
    }**/
	
	addWarenkorb(artikel: Artikel){
		this.warenkorb.add(artikel);
	}
}
