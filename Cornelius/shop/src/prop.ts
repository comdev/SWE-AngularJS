<reference path="typings/angular2/angular2.d.ts" >
import {Component, View, bootstrap, For} from 'angular2/angular2';
@Component({
    selector: 'display'
})
@View({
    template: `<p>My name: {{ myName }}</p>
          <p>Friends:</p>
          <ul>
             <li *for="#name of names">
                {{ name }}
             </li>
          </ul>`,
    directives: [For]
})
class DisplayComponent {
    myName: string;
    names: Array;

    constructor() {
        this.myName = "Alice";
        this.names = ["Aarav", "Mart�n", "Shannon", "Ariana", "Kai"];
    }
}
bootstrap(DisplayComponent);