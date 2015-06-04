import {View, Component, For} from 'angular2/angular2';

import{Warenkorb} from '../warenkorb/warenkorb';
import{Artikel} from './artikel';
import{ArtikelResource} from './artikelResource';

@Component({
    selector: 'artikelListe',
    injectables: [ArtikelResource]
})
@View({
    templateUrl: 'src/artikel/listArtikel.html', 
	directives: [For]
})

export class ListArtikel {
	liste: ArtikelResource;
	warenkorb: Warenkorb
	constructor(liste: ArtikelResource){
		
       /* let tasche= new Artikel("Tasche",1);
        let rucksack= new Artikel("Rucksack",2);
        let geldbeutel= new Artikel("Geldbeutel",3);


        this.artikel = [];

        this.artikel.push(tasche);
        this.artikel.push(rucksack);
        this.artikel.push(geldbeutel);*/
        
        this.liste = liste;

		this.warenkorb = new Warenkorb();
	}
	
	addArtikel(artikel: Artikel){
        this.liste.addArtikel(artikel);
    }

    getAllArtikel(){
        return this.liste.getAllArtikel();
    }
	
	addWarenkorb(artikel: Artikel){
		this.warenkorb.add(artikel);
	}
}
