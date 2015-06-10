import {View, Component, For} from 'angular2/angular2';

import{ArtikelResource} from './artikelResource';
import{Artikel} from './artikel';
import{ArtikelService} from './artikelService';
@Component({
    selector: 'artikelComponent'
})
@View({
    templateUrl: 'src/artikel/listArtikel.html',
    directives: [For]
})

export class ArtikelComponent{
	
	artikel: Array<Artikel>
	artikelMock: ArtikelResource;
	
	constructor(){
		console.log("Kontruktor von ArtikelController aufgerufen");
		this.artikelMock = new ArtikelResource();
		this.artikel = this.artikelMock.getAllArtikel();
	}
	
	public addArtikel (artikel: Artikel): void{
		ArtikelService.add(artikel);
	}
}