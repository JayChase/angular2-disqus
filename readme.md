##angular2-disqus

A DISQUS integration for Angular2. **Work in progress**

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
    'DISQUS': 'src'
};
```

and add the package to the list of packages

 ```javascript
var packages = {
    ...
    'DISQUS': { main: 'index.js', defaultExtension: 'js' }
};
```

###Usage

1. At the relevant level for your app add import the **DisqusService** and declare the service provider.

For example in **app.component.ts**

```javascript
var packages = {
    ...
    'DISQUS': { main: 'index.js', defaultExtension: 'js' }
};
```

2. Add a comments section to a page/view import the **DisqusThreadComponent** and **DisqusService**.

```javascript
import { DisqusService, DisqusThreadComponent } from '../src'; //in live this would be the node_modules path

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.component.html',
    styleUrls: ['demo.component.css'],
    providers: [],
    directives: [
        DisqusThreadComponent
    ]
})
```

*In this example the **DisqusService** provider has already been declared at a higher level.

3. Add it as a nested component.

```html
<disqus-thread></disqus-thread>
```

4. Call the **DisqusService.reset** with the page details to load the comments

```javascript
ngAfterViewInit() {
    this.disqusService.reset('page3', 'http://localhost:3000/demo/page3', true);
}
```
