/**
 * Created by yaelwidmann on 20.05.15.
 */
import{Artikel} from './Artikel';

var artikel: Array<Artikel> =[

        new Artikel("Tasche",1),
        new Artikel("Rucksack",1),
        new Artikel("Geldbeutel",1),
    ];
export let ArtikelResource: any = {
    getAllArtikel(): Array<Artikel>{
        return artikel;
    },
    
    getArtikelByName(name: string): Artikel{
        if(name.length <= 0){
            return
        }
        
        this.artikel.forEach(function (art) {
            if(art.name === name){
                return art;
            }
        })
    },
    
    add(art: Artikel): void{
        artikel.push(art);
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

