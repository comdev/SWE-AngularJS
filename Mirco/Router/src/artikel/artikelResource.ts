/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Artikel} from './Artikel';

export class ArtikelResource{
    artikel: Array<Artikel>;

    constructor(){

        let tasche= new Artikel("Tasche",1);
        let rucksack= new Artikel("Rucksack",1);
        let geldbeutel= new Artikel("Geldbeutel",1);


        this.artikel = [];

        this.artikel.push(tasche);
        this.artikel.push(rucksack);
        this.artikel.push(geldbeutel);

    }
    addArtikel(artikel: Artikel){
        this.artikel.push(artikel)
    }

    getAllArtikel(){
        return this.artikel;
    }
    /*getArtikelById(id:number){
        for(var art in this.artikel){
            if(art.id.isEqual(id)){
                return art;
            }
            else{
                return "Artikel nicht vorhanden";
            }
        }
    }
    getArtikelByBezeichnung(bezeichnung:string){
        var artikel = [];
        for(var art in this.artikel){
            if(art.bezeichnung.isEqual(bezeichnung)){
                artikel.push(art);
            }
        }
        return artikel;
    }*/
}
