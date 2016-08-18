import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { DisqusThreadComponent } from './disqus-thread.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [        
    ],
    declarations: [
        DisqusThreadComponent
    ],
    exports: [
        DisqusThreadComponent
    ]
})
export class DisqusModule { }