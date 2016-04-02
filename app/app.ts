import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";


/*
 * Components
 */

//import {HelloWorld} from 'angular2-library-example/components';
import {SelectComponent} from 'components/SelectComponent';


@Component({
    selector: 'simple-api',
    template: `
  <div>
    <h1>Simple API</h1>
    <ul>
      <li>Will need an Input to call API</li>
      <li>Will need a Service to call that API</li>
    </ul>
    <div>
      <select-component></select-component>
    </div>
  </div>
  `
})
class SimpleAPI {
}

bootstrap(SimpleAPI);
