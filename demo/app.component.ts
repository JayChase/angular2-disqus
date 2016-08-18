import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { DemoComponent } from './demo.component';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [  
  ],
  directives: [
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
