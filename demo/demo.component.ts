import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css']
})

export class DemoComponent {
    title: string = 'DISQUS service demo';
    description: string = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
    feedback: string = '';

    pageUrl: string = '';
    pageIdentifier: string = '';

    constructor() { }

    update(pageIdentifier: string, pageUrl: string) {
        this.pageIdentifier = pageIdentifier; 
        this.pageUrl = pageUrl;
    }
}