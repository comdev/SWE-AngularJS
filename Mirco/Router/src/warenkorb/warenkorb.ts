import {View, Component, For} from 'angular2/angular2';
import {Artikel} from '../artikel/artikel';

@Component({
    selector: 'warenkorb'
})
@View({
    templateUrl: 'src/warenkorb/warenkorb.html', 
	directives: [For]
})

export class Warenkorb {
	warenkorb: Array<Artikel>;
    gesamtPreis: number;
    anzahl: Array<number>;
	constructor(){
		this.warenkorb = this.getWarenkorb();
        this.gesamtPreis = this.getGesamtPreis();
	}
	add(artikel: Artikel){
        let position = this.notIn(this.warenkorb, artikel);
        if(position===-1){
		    this.warenkorb.push(artikel);
            this.anzahl.push(1);
        }
        else{
            this.anzahl[position] = this.anzahl[position]+1;
        }
        this.gesamtPreis = this.getGesamtPreis();
	}
    delete(artikel: Artikel){
        let position = this.notIn(this.warenkorb, artikel);
        if(position !== -1){
            let anzahl = this.anzahl[position];
            if(anzahl !== 1){
                this.anzahl[position]= this.anzahl[position]-1;
            }else{
                let neuerwarenkorb = [];
                let neueanzahl = [];
                for(let i = 0; i<this.warenkorb.length;i++){
                    if(this.warenkorb[i].name !== artikel.name){
                        neuerwarenkorb.push(this.warenkorb[i]);
                        neueanzahl.push(this.anzahl[i]);
                    }
                }
                this.warenkorb = neuerwarenkorb;
                this.anzahl = neueanzahl;
            }
        }
        this.gesamtPreis = this.getGesamtPreis();
    }
    getGesamtPreis(){
        let i = 0;
        let gespreis = 0;
        for(i;i<this.warenkorb.length; i++){
            gespreis = gespreis + this.warenkorb[i].preis * this.anzahl[i];
        }
        return gespreis;
    }
    getWarenkorb(){
        let waren = this.getWaren();
        let anzahl = [];
        let warenkorb = [];
        let i = 0;
        for(i;i<waren.length;i++){
            let position = this.notIn(warenkorb, waren[i]);
            if(position === -1){
                warenkorb.push(waren[i]);
                anzahl.push(1);
            }else{
                anzahl[position] = anzahl[position]+1;
            }
        }
        this.anzahl = anzahl;
        return warenkorb;
    }
    getWaren(){
       let warenkorb = [new Artikel('Tisch',10),new Artikel('Tisch',10), new Artikel('Stuhl', 8),new Artikel('Stuhl', 8)];
        return warenkorb;
    }
    notIn(warenkorb:Array<Artikel>,artikel:Artikel){
        for(let i = 0; i<warenkorb.length;i++){
            if(warenkorb[i].name === artikel.name){
                return i;
            }
        }
        return -1;
    }
}


