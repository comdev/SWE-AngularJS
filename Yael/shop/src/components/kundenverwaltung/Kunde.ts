/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Adresse} from './Adresse';
interface IKunde{
    id:number;
    vorname:string;
    nachname:string;
    email:string;
    adresse:Adresse;
}
export class Kunde implements IKunde{
    id:number;
    vorname:string;
    nachname:string;
    email:string;
    adresse:Adresse;

    constructor(id:number,
    vorname:string,
    nachname:string,
    email:string,
    adresse:Adresse){
        this.id=id;
        this.vorname=vorname;
        this.nachname=nachname;
        this.email=email;
        this.adresse=adresse;
    }
}