##angular2-disqus

A DISQUS integration for Angular2. **Work in progress**

###Install

```bash
npm install --save angular2-disqus
```

###Setup

####SystemJS

In the SystemJs config file (systemjs.config.js):

- add a mapping for the package

```js
var map = {
    ...
    'DISQUS': 'src'
};
```

- add the package to the list of packages

 ```js
var packages = {
    ...
    'DISQUS': { main: 'index.js', defaultExtension: 'js' }
};
```


####Add the DISQUS script

Add the DISQUS embed script to you main page (index.html)

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

###Usage

https://help.disqus.com/customer/portal/articles/472107