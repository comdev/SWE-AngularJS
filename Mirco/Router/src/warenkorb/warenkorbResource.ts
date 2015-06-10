/**
 * Created by yaelwidmann on 10.06.15.
 */
import {Artikel} from '../artikel/artikel';
import {Warenkorb} from './warenkorb';


let warenkorb: Array<Warenkorb> = [new Artikel('Tisch',10),new Artikel('Tisch',10), new Artikel('Stuhl', 8),new Artikel('Stuhl', 8)];

export let WarenkorbResource: any = {

    add(artikel: Artikel): void{
        let position = this.notIn(artikel);
        if(position===-1){
            warenkorb.push(artikel,1);
        }
        else{
            warenkorb[i].anzahl++;
        }
    },

    delete(artikel: Artikel):void{

    let position = this.notIn(artikel);
    if (position !== -1){
        let anzahl = warenkorb[position].anzahl;
        if (anzahl !== 1){
            warenkorb[position].anzahl--;
        }else{
            warenkorb.splice(position,1);
        }
    }
},
getGesamtPreis(): number{
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
notIn(artikel:Artikel):number{
    for (let i = 0; i<warenkorb.length;i++){
        if (warenkorb[i].artikel.name === artikel.name){
            return i;
        }
    }
    return -1;
}
}