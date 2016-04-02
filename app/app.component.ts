import {Component} from 'angular2/core';

/* Import Components */
import {SelectComponent} from './components/SelectComponent';


@Component({
    selector: 'my-app',
    directives: [SelectComponent],
    template: `
    <h1>Simple API</h1>
    <h1>Simple API</h1>
    <ul>
      <li>Will need an Input to call API</li>
      <li>Will need a Service to call that API</li>
    </ul>
    <select-component></select-component>
   `
})

export class AppComponent {

}



