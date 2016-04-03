/*
 * Angular
 */
import {Component, Input} from 'angular2/core';
import { JsonPipe, CORE_DIRECTIVES } from 'angular2/common';
import {Http, Response} from 'angular2/http';


@Component({
    selector: 'select-component',
    template: `
  <div>
    <input [(ngModel)]="artist" placeholder="name" />
    <button (click)="requestArtist(artist)"> Submit</button>
  </div>

  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
  `
})

export class SelectComponent {
    @Input() artist:any;

    imageUrl:string =  'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7sM=s0';

    url:string =  'https://www.rijksmuseum.nl/api/nl/collection/sk-c-5?key=iewuYh26&format=json';

    data:Object;
    loading:boolean;

    constructor(public http:Http) {
    }

    requestArtist(artist):void {
        console.log('Request artist', artist);

        this.loading = true;
        this.http.request(this.url)
            .subscribe((res:Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }

}