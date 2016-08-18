import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { DisqusThreadComponent } from './disqus-thread.component';
import { DisqusService } from './disqus.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        DisqusService
    ],
    declarations: [
        DisqusThreadComponent
    ],
    exports: [
        DisqusThreadComponent
    ]
})
export class DisqusModule { }