import {View, Component, For} from 'angular2/angular2';

import{Artikel} from './artikel';
import{ArtikelResource} from './artikelResource';

export let ArtikelService: any = {
		
	add(artikel: Artikel): void{
		if(!artikel){
			return
		}
		
		var artikelMock: ArtikelResource = new ArtikelResource();
		artikelMock.artikel.push(artikel);
	}
};