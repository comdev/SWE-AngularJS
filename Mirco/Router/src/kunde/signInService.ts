/// <reference path="kunde.d.ts"/>
/// <reference path="kundeService.d.ts"/>

import {Kunde} from './kunde';
import {KundeService} from './kundeService';

export let SignInService: any = {
	
	einloggen(email: string, passwort: string): Kunde{
		if (email !== "" && passwort !== ""){
			let kunde: Kunde = KundeService.getKundeByEmail(email);
			if (!kunde || kunde.passwort !== passwort){
				return null;
			}
			else{ 
				return kunde;
			}
		}
	}
}