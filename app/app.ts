import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {Main} from './pages/main/main';


@Component({
  selector: 'app',
  templateUrl: './app.html',
  directives: [ ...ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Main, name: 'Main' },
  { path: '/**', redirectTo: ['Main'] }
])
export class App {
  constructor() {}
}

bootstrap(App, [
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
