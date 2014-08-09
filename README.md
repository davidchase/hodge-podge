
Hodge Podge 
===========
![Hodge-podge](images/hp.png)

A checkout flow for the browser. w/a [hapi](https://github.com/hapijs/hapi) medium.

Getting Started
---------------
`npm i` will install all dev dependencies to `node_modules` dir.

`npm i -g nodemon` will globally install a nice watcher for a hapi development.

Then you can do something like `nodemon --watch client server.js`
this will watch the `client` dir and `server.js` file for changes.

Current Structure
-----------------
    client
    ├── dist
    └── src
        ├── cart
        │   ├── cartCtrl.js
        │   ├── index.js
        │   └── scss
        ├── common
        ├── scss
        │   └── style.scss
        └── sign-in
            ├── index.js
            └── scss
    server
    ├── config.js
    └── routes.js
    tasks
    ├── build.js
    ├── default.js
    ├── scripts
    │   ├── browserify.js
    │   ├── lint.js
    │   ├── uglify.js
    │   └── vendor.js
    └── styles
        └── compass.js
