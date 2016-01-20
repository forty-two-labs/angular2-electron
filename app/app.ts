import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <h1>Main</h1>
  `
})

export class App {
  constructor() {}
}

bootstrap(App);
