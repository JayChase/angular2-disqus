import { Component, AfterViewInit } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';

import { DisqusService, DisqusThreadComponent } from '../src'; //in live this would be the node_modules path

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [],
    directives: [
        MdButton,
        MdInput,
        MD_CARD_DIRECTIVES,
        DisqusThreadComponent
    ]
})

export class DemoComponent implements AfterViewInit {
    title: string = 'DISQUS service demo';
    description: string = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
    feedback: string = '';

    pageUrl: string = '';
    pageIdentifier: string = '';

    constructor(private disqusService: DisqusService) { }

    ngAfterViewInit() {
        //in production use AfterViewInit to call reset to load comments automatically.
    }

    reset() {
        this.disqusService.reset(this.pageIdentifier, this.pageUrl, true);
    }

}