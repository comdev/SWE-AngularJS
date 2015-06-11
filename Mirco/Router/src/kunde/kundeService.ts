/// <reference path="kunde.d.ts"/>

import {Kunde} from './kunde';


var kunden: Array<Kunde> = [
    new Kunde("Mirco", "Schwarz", "mirco@schwarz.de","123"),
    new Kunde("Cornelius", "Müller", "cornelius@mueller.de","123"),
    new Kunde("Sally", "Pfeiffer", "sally@pfeiffer.de","123"),
    new Kunde("Yael", "Wiedmann", "yael@wiedmann.de","123")
    ];

export let KundeService: any = {

    getKundeByName(name: string, nachname: string): Kunde {
        for (let position = 0; position < kunden.length; position++) {
            if (kunden[position].name === name && kunden[position].nachname === nachname){
                return kunden[position];
            }
        }
        return null;
    },
    
    getKundeByEmail(email: string): Kunde {
        for (let position = 0; position < kunden.length; position++) {
            if (kunden[position].email === email){
                return kunden[position];
            }
        }
        return null;
    },
    
    getAllKunden():Array<Kunde>{
        return kunden;
    },
    
    add(kunde: Kunde):void{
       if(kunde !== null){
           kunden.push(kunde)
       }
    },
    
    delete(kunde:Kunde):void{
        if(kunde !== null){
            let position = kunden.indexOf(kunde);
            if (position !== -1 )
                kunden.splice(position);
        }
    }
}