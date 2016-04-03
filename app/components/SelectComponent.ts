/*
 * Angular
 */
import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
    selector: 'select-component',
    template: `
  <div>
    <input [(ngModel)]="artist" placeholder="name" />
  </div>
  `
})

export class SelectComponent {
    @Input() artist: any;
}