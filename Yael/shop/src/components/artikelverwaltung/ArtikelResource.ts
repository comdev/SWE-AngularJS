/**
 * Created by yaelwidmann on 20.05.15.
 */

class ArtikelResource{
    artikel: Array<Artikel>;

    constructor(){

    let tasche= new Artikel();
    tasche.id = 1;
    tasche.bezeichnung = "Tasche";
    tasche.version = 1;
    tasche.preis = 50;
        tasche.anzahlWarenkorb=0;


        let rucksack= new Artikel();
        rucksack.id = 1;
        rucksack.bezeichnung = "Rucksack";
        rucksack.version = 1;
        rucksack.preis = 50;
        rucksack.anzahlWarenkorb=0;

        let geldbeutel= new Artikel();
        geldbeutel.id = 1;
        geldbeutel.bezeichnung = "Geldbeutel";
        geldbeutel.version = 1;
        geldbeutel.preis = 50;
        geldbeutel.anzahlWarenkorb=0;
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