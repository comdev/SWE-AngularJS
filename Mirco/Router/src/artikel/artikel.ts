import {View, Component} from 'angular2/angular2';

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