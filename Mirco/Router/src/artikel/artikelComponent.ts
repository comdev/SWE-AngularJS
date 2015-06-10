import {View, Component, For} from 'angular2/angular2';

import{ArtikelResource} from './artikelResource';
import{Artikel} from './artikel';
import{ArtikelService} from './artikelService';

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
}