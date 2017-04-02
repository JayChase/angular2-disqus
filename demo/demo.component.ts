import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'demo',
    templateUrl: './demo/demo.component.html',
    styleUrls: ['./demo/demo.component.css']
})

export class DemoComponent implements OnInit {
    title = 'DISQUS service demo';
    description = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
    feedback = '';

    pageUrl = '';
    pageIdentifier = '';

    constructor( @Inject(DOCUMENT) private document: any) {
        console.log(this.document.location.href);
    }

    ngOnInit() {
    }

    update(pageIdentifier: string, pageUrl: string) {
        this.pageIdentifier = pageIdentifier;
        this.pageUrl = pageUrl;
    }
}