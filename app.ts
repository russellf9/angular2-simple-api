import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
  selector: 'simple-api',
  template: `
  <div>
    Simple API
  </div>
  `
})
class SimpleAPI {
}

bootstrap(SimpleAPI);
