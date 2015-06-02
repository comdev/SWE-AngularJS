/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Artikel as Artikel} from './Artikel';

export class ArtikelResource{
    artikel: Array<Artikel>;

    constructor(){

        let tasche= new Artikel(1,"Tasche",1,50,true);
        let rucksack= new Artikel(2,"Rucksack",1,50,true);
        let geldbeutel= new Artikel(3,"Geldbeutel",1,50,true);


        this.artikel = new Array<Artikel>();

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
    getArtikelById(id:number){
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
    }
}

