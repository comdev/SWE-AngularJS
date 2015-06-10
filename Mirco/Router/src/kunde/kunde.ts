import {View, Component} from 'angular2/angular2';

/*interface IKunde{
	name: string;
	nachname: string;
    email:string;
}*/

export class Kunde /*implements IKunde*/{
	name: string;
	nachname: string;
    email: string;
	
	constructor(name: string, nachname: string, email:string){
		this.name = name;
		this.nachname = nachname;
        this.email = email;
	}
}