import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Demo app';
  description: string = 'Demo the library here by adding using the demo component. Separated from app to make unit testing easier.';

  constructor() {

  }

  ngOnInit() {

  }
}
