/// <reference path="warenkorb.d.ts"/>
/// <reference path="../artikel/artikel.d.ts"/>

import {Artikel} from '../artikel/artikel';
import {Warenkorb} from './warenkorb';


var warenkorb: Array<Warenkorb> = [
    new Warenkorb(new Artikel('Tisch',10),4), 
    new Warenkorb(new Artikel('Sofa',10),3), 
    new Warenkorb(new Artikel('Stuhl', 8),1)
];

export let WarenkorbResource: any = {

    add(art: Artikel): void{
        let position = this.notIn(art);
        if(position===-1){
            warenkorb.push(new Warenkorb(art,1));
        }
        else{
            warenkorb[position].anzahl++;
        }
    },

    delete(artikel: Artikel):void{

        let position = this.notIn(artikel);
        if (position !== -1){
            let anzahl = warenkorb[position].anzahl;
            if (anzahl !== 1){
                warenkorb[position].anzahl--;
            }
            else{
                warenkorb.splice(position,1);
            }
        }
    },
    
    getGesamtpreis(): number{
        let i = 0;
        let gespreis = 0;
        for (i;i<warenkorb.length; i++){
            gespreis = gespreis + warenkorb[i].artikel.preis * warenkorb[i].anzahl;
        }
        return gespreis;
    },
    getWarenkorb(): Array<Warenkorb>{
        return warenkorb;
    },
    
    notIn(artikel: Artikel): number{
        for (let i = 0; i < warenkorb.length; i++){
            if (warenkorb[i].artikel.name === artikel.name){
                return i;
            }
        }
        return -1;
    },
    
    deleteAll(): void{
        warenkorb = [];
    }
}