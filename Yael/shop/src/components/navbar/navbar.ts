///<reference path="../../typings/angular2/angular2.d.ts"/>
import{View, bootstrap, Component} from 'angular2/angular2';
@Component({
    selector: "nav-bar"
})
@View({template: `<nav class="navbar navbar-default">
<div class="container-fluid">
<div class="navbar-header">
<a class="navbar-brand" href="#">Webshop</a>
</div>
<div>
    <ul class="nav navbar-nav">
<li class="active"><a href="components/artikelverwaltung/artikel.html">Unsere Artikel</a></li>
<li><a href="components/bestellverwaltung/bestellung.html">Ihre Bestellungen</a></li>
<li><a href="components/kundenverwaltung/kunde.html">Alle Kunden</a></li>
</ul>
</div>
</div>
</nav>` })
class navComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}
bootstrap(navComponent);