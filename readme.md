##angular2-disqus

A DISQUS integration for Angular 2.

###Install

```bash
npm install --save angular2-disqus
```

###Setup

####Add the DISQUS script

Add the DISQUS embed script to you main page (index.html) making sure to change the url to your disqus site url.

 ```html
<head>
    <title>your app</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="/">

    ...

    <script src="//yoursite.disqus.com/embed.js"></script>

    ...

</head>
```

####SystemJS

In the SystemJs config file (systemjs.config.js) add a mapping for the package

```javascript
var map = {
    ...
    'angular2-disqus': 'node_modules/angular2-disqus/lib'
};
```

and add the package to the list of packages

 ```javascript
var packages = {
    ...
    'angular2-disqus': { main: 'disqus.module.js', defaultExtension: 'js' }
};
```

###Usage

At the relevant level for your app add import the **DisqusModule**.

For example in **app.module.ts**

```javascript
import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DemoComponent } from './demo.component';

import { DisqusModule } from '../src/disqus.module';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
    imports: [
        //A2 stuff
        BrowserModule,
        FormsModule,
        //src module
        DisqusModule,
        //material modules
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]

})
export class AppModule { }
```

To add a comments section add it as a nested component on your component and set the pageIdentifier and the pageUrl.

```html
<disqus-thread [page-identifier]="pageIdentifier" [page-url]="pageUrl"></disqus-thread>
```

The comments section will be reset everytime either **page-identifier** or **page-url** are updated (as long as at least one of the values is truthy). 

###Future
Add support for comment counts??
https://help.disqus.com/customer/portal/articles/565624-tightening-your-disqus-integration
