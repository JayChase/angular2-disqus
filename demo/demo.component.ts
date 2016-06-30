import { Component, OnInit } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';

import { DisqusService, ResetConfig, DisqusThreadComponent } from '../src'; //in live this would be the node_modules path

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

export class DemoComponent implements OnInit {
    title:string = 'DISQUS service demo';
    description:string = 'How to use the DISQUS reset function to load a new page of comments. Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For more information click the link below';

    pageUrl: string = '';
    pageIdentifier: string = '';

    constructor(private disqusService: DisqusService) { }

    ngOnInit() { }

    reset() {
        this.disqusService.reset(new ResetConfig(this.pageIdentifier, this.pageUrl, true));
    }

}