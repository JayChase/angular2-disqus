import { Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css']
})

export class DemoComponent implements OnInit {
    title: string = 'DISQUS service demo';
    description: string = 'Enter the pageIdentifier and PageUrl for the comments to load and then click reset. For detailed usage instructions cick the following link: ';
    feedback: string = '';

    pageUrl: string = '';
    pageIdentifier: string = '';

    constructor(@Inject(DOCUMENT) private document: any) { 
        console.log(this.document.location.href);
    }

    ngOnInit(){       
    }

    update(pageIdentifier: string, pageUrl: string) {
        this.pageIdentifier = pageIdentifier; 
        this.pageUrl = pageUrl;
    }
}