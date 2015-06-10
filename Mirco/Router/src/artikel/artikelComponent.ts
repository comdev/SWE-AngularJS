/// <reference path="../../angular2/angular2.d.ts"/>
/// <reference path="artikelResource.d.ts"/>
/// <reference path="artikel.d.ts"/>
/// <reference path="artikelService.d.ts"/>

import {View, Component, For} from 'angular2/angular2';

import{ArtikelResource} from './artikelResource';
import{Artikel} from './artikel';
//import{ArtikelService} from './artikelService';
@Component({
    selector: 'artikelComponent'
})
@View({
    templateUrl: 'src/artikel/artikelComponent.html',
    directives: [For]
})

export class ArtikelComponent{
	
	artikel: Array<Artikel>;
	
	constructor(){
		console.log("Kontruktor von ArtikelComponent aufgerufen");
		this.artikel = ArtikelResource.getAllArtikel();
	}
	
	public addArtikel (name: string, price: number): void{
		console.log("AddArtikel wird aufgerufen");
		
		ArtikelResource.add(new Artikel(name, price));
	}
}