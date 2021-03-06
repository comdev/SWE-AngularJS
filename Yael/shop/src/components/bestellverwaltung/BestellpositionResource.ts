/**
 * Created by yaelwidmann on 20.05.15.
 */
import {Bestellposition} from './Bestellposition';
class BestellpositionResource{
    bestellpositionen: Array<Bestellposition>;
    constructor(){
        let bestellpostion1 = new Bestellpostion();
        bestellpostion1.bestellId = 1;
        bestellpostion1.id=1;
        bestellpostion1.menge=7;
        bestellpostion1.artikelId=1;

        let bestellpostion2 = new Bestellpostion();
        bestellpostion1.bestellId = 2;
        bestellpostion1.id=2;
        bestellpostion1.menge=9;
        bestellpostion1.artikelId=5;

        let bestellpostion3 = new Bestellpostion();
        bestellpostion1.bestellId = 3;
        bestellpostion1.id=3;
        bestellpostion1.menge=4;
        bestellpostion1.artikelId=3;

        this.bestellpositionen.push(bestellpostion1);
        this.bestellpositionen.push(bestellpostion2);
        this.bestellpositionen.push(bestellpostion3);
    }
    getBestellPositionById(id:number){
        for(bestellposition in this.bestellpositionen){
            if(bestellposition.id.isEqual(id)){
                return bestellposition;
            }
            else{
                return -1;
            }
        }
    }
    getBestellPositionByBestellId(bestellId:number){
        let bestellungen= [];
        for(bestellpos in this.bestellpositionen){
            if(bestellId.id.isEqual(bestellId)){
                bestellungen.push(bestellpos);
            }
        }
        return bestellungen;
    }
}