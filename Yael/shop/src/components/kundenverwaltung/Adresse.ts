/**
 * Created by yaelwidmann on 20.05.15.
 */
interface IAdresse{
    ort:string;
    plz:number;
    strasse: string;
    hausnummer:number;
}
export class Adresse implements IAdresse{
    ort:string;
    plz:number;
    strasse: string;
    hausnummer:number;
    constructor(ort:string,
    plz:number,
    strasse: string,
    hausnummer:number){
        this.ort=ort;
        this.plz=plz;
        this.strasse=strasse;
        this.hausnummer=hausnummer;
    }
}