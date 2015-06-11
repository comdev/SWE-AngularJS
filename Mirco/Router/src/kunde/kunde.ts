import {View, Component} from 'angular2/angular2';

export class Kunde {
	name: string;
	nachname: string;
    email: string;
	passwort: string;
	
	constructor(name: string, nachname: string, email:string, passwort: string){
		this.name = name;
		this.nachname = nachname;
        this.email = email;
		this.passwort = passwort;
	}
}