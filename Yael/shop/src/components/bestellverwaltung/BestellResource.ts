/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Bestellung};
class BestellResource{
    bestellungen:Array<Bestellung>;
    constructor(){
        var bestellung1 =new Bestellung();
        bestellung1.id = 1;
        bestellung1.kundeId = 1;

        var bestellung2 =new Bestellung();
        bestellung1.id = 2;
        bestellung1.kundeId = 1;

        var bestellung3 =new Bestellung();
        bestellung1.id = 3;
        bestellung1.kundeId = 1;

        var bestellung4 =new Bestellung();
        bestellung1.id = 4;
        bestellung1.kundeId = 2;

        this.bestellungen.push(bestellung1);
        this.bestellungen.push(bestellung2);
        this.bestellungen.push(bestellung3);
        this.bestellungen.push(bestellung4);
    }
    getBestellungenByKundenId(kundeid:number){
        var bestellungen = [];
        for(bestellung in this.bestellungen){
            if(bestellung.kundeId.isEqual(kundeid)){
                bestellungen.push(bestellung);
            }
            return bestellungen;
        }
    }

}