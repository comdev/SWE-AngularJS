/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="artikelResource.d.ts"/>
/// <reference path="artikel.d.ts"/>
/// <reference path="artikelService.d.ts"/>

import {View, Component, For} from 'angular2/angular2';

import{ArtikelResource} from './artikelResource';
import{Artikel} from './artikel';
import{ArtikelService} from './artikelService';
@Component({
    selector: 'artikelComponent'
})
@View({
    templateUrl: 'src/artikel/artikelComponent.html',
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
	
	public addArtikel (name: string, price: number): void{
		console.log("AddArtikel wird aufgerufen");
		
		ArtikelService.add(new Artikel(name, price));
	}
}