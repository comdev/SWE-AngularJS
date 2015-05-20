/**
 * Created by yaelwidmann on 20.05.15.
 */
import {Artikel};
class ArtikelResource{
    artikel: Array<Artikel>;

    constructor(){

    let tasche= new Artikel();
    tasche.id = 1;
    tasche.bezeichnung = "Tasche";
    tasche.version = 1;
    tasche.preis = 50;

        let rucksack= new Artikel();
        tasche.id = 1;
        tasche.bezeichnung = "Rucksack";
        tasche.version = 1;
        tasche.preis = 50;

        let geldbeutel= new Artikel();
        tasche.id = 1;
        tasche.bezeichnung = "Geldbeutel";
        tasche.version = 1;
        tasche.preis = 50;
        artikel.push(tasche);
        artikel.push(rucksack);
        artikel.push(geldbeutel);

    }
    getAllArtikel(){
        return artikel;
    }
    getArtikelById(id:number){
        for(art in artikel){
            if(art.id.isEqual(number)){
                return art;
            }
            else{
                return "Artikel nicht vorhanden";
            }
        }
    }
}