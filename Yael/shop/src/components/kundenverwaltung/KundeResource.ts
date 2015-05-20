/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Kunde};
import{Adresse};
class KundeResource{
    kunden: Array<Kunde>;
    constructor(){
        var kunde1 = new Kunde();
        kunde1.id = 1;
        kunde1.vorname = "herbert";
        kunde1.nachname = "huber";
        kunde1.email = "herbert.huber@web.de";
        kunde1.adresse= new Adresse();
        kunde1.adresse.ort = "Karlsruhe";
        kunde1.adresse.plz = 71245;
        kunde1.adresse.strasse = "Moltkestrasse";
        kunde1.adresse.hausnummer=3;

        var kunde2 = new Kunde();
        kunde2.id = 1;
        kunde2.vorname = "kunde2";
        kunde2.nachname = "Herterer";
        kunde2.email = "frank.herterer@web.de";
        kunde2.adresse= new Adresse();
        kunde2.adresse.ort = "Ettlingen";
        kunde2.adresse.plz = 71245;
        kunde2.adresse.strasse = "Goethestrasse";
        kunde2.adresse.hausnummer=3;

        this.kunden.push(kunde1);
        this.kunden.push(kunde2);
    }
    getAlleKunden(){
        return this.kunden;
    }
    getKundeById(id:number){
        for(kunde in this.kunden){
            if(kunde.id == id){
                return kunde
            }
            else{
                return "Kunde mit der Id:"+id+" gibt es nicht";
            }
        }
    }
}