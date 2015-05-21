/**
 * Created by yaelwidmann on 20.05.15.
 */
///<reference path="../../typings/angular2/angular2.d.ts"/>
interface IArtikel{
    id:number;
    bezeichnung:string;
    preis: number;
    version: number;
    ausgesondert: boolean;
}
export class Artikel implements IArtikel{
    id:number;
    bezeichnung:string;
    preis:number;
    version:number;
    ausgesondert:boolean;
    constructor(id:number, bezeichnung:string, preis:number, version:number, ausgesondert:boolean){
        this.id =id;
        this.bezeichnung = bezeichnung;
        this.preis=preis;
        this.version=version;
        this.ausgesondert=ausgesondert;
    }
}
