/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Kunde} from './Kunde';
import{Adresse} from './Adresse';
export class KundeResource{
    kunden: Array<Kunde>;
    constructor(){
        this.kunden = new Array<Kunde>();
        let kunde1 = new Kunde(1,"herbert","huber",
            "herbert.huber@web.de",new Adresse("Karlsruhe",
            71245,"Moltkestrasse",3));

        let kunde2 = new Kunde(2,"kunde2","Herterer","frank.herterer@web.de", new Adresse("Ettlingen",71245, "Goethestrasse",3));

        this.kunden.push(kunde1);
        this.kunden.push(kunde2);
    }
    getAlleKunden(){
        return this.kunden;
    }
    getKundeById(id:number){
        for(let kunde:Kunde in this.kunden){
            if(this.kunden.hasOwnProperty(kunde)){
                if(kunde.id === 1){
                    return " Herbert";
                }
            }

        }
        return " Kunde mit der Id:"+id+" gibt es nicht";

    }
}