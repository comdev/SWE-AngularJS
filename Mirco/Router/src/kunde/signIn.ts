/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>

import {Kunde} from './kunde';
import {KundeService} from './kundeService';

export class SignIn{
	listKunde: Array<Kunde>;
	constructor(){
		this.listKunde = KundeService.getAllKunden;
	}
}