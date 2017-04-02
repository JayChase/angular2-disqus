import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { DisqusModule } from '../src/disqus.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule,
        DisqusModule,
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule { }