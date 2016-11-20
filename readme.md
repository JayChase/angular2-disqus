##angular2-disqus

[DISQUS](https://disqus.com/) integration with Angular 2.

###Install

```bash
npm install --save angular2-disqus
```

###Setup

####Add the DISQUS script

Add the DISQUS embed in the body of your main page (index.html) making sure to change the url to your disqus site url.

**Breaking change as of v3 the embed script must now be in the body of the page not the head**

 ```html
<html>

<head>
  <title>demo app</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <base href="/">

  <link href="../node_modules/@angular2-material/core/style/core.css" rel="stylesheet">

  <!-- Polyfill(s) for older browsers -->
  <script src="../node_modules/core-js/client/shim.min.js"></script>

  <script src="../node_modules/zone.js/dist/zone.js"></script>
  <script src="../node_modules/reflect-metadata/Reflect.js"></script>
  <script src="../node_modules/systemjs/dist/system.src.js"></script>

  <script src="../public/js/systemjs.config.js"></script>

  <script>
      System.import('demo').catch(function(err){ console.error(err); });
    </script>
</head>

<body>
  <demo-app>Loading...</demo-app>
  <script src="//angular2disqustest.disqus.com/embed.js"></script>
</body>

</html>
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
###or for angular-cli

Add the package to **angular-cli.json** 

```json
"packages": [
    "node_modules/angular2-disqus/lib"
  ]
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

import { DisqusModule } from 'angular2-disqus';  //or for angular-cli the path will be ../../node_modules/angular2-disqus

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
