import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'simple-api',
  template: `
  <div>
    <h1>Simple API</h1>
    <ul>
      <li>Will need an Input to call API</li>
      <li>Will need a Service to call that API</li>
    </ul>
  </div>
  `
})
class SimpleAPI {
}

bootstrap(SimpleAPI);
