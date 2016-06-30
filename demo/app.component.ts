import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

import { DisqusService } from '../src'; //in live this would be the node_modules path

import { DemoComponent } from './demo.component';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    DisqusService
  ],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    DemoComponent
  ]
})

export class AppComponent implements OnInit {
  title: string = 'Demo app';
  description: string = 'Demo the library here by adding using the demo component. Separated from app to make unit testing easier.';

  constructor() {

  }

  ngOnInit() {

  }
}
