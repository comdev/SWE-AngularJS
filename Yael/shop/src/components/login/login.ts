/**
 * Created by yaelwidmann on 18.05.15.
 */
///<reference path="../../typings/angular2/angular2.d.ts"/>
import{Component,View, bootstrap} from 'angular2/angular2';

@Component({
    selector:'login'
})
@View({
    template:`<div class="container">
<div class="row">
<input #name type="text"  placeholder="Email" required autofocus>
<input #pw type="password" class="form-control" placeholder="Password" required>
<button (click)="onClickLogin(name.value, pw.value)" class="btn btn-primary btn-md" type="submit">
Login</button>
<a href="#" class="pull-right need-help">Brauchen Sie Hilfe? </a><span class="clearfix"></span>
</div>
<a href="#" class="text-center new-account">Sign in</a>
</div>
</div>`
})
class loginComponent{
    constructor(){

    }
    onCLickLogin(name:string, pw:string){

    }
}
bootstrap(loginComponent);