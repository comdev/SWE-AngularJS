/**
 * Created by yaelwidmann on 20.05.15.
 */
import{App} from 'components/app/app';
import{bootstrap} from 'angular2/angular2;'
import {RootRouter} from 'angular2/src/router/router';
import {Pipeline} from 'angular2/src/router/pipeline';
import{Router} from 'angular2/router';
bootstrap(App, [
bind(Router).toValue(new RootRouter(new Pipeline()))
]);