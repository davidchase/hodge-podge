'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    options: {
        debug: {
            request: ['error']
        },
        cache: {
            engine: require('catbox-memory')
        },
        cors: true,
        files: {
            etagsCacheMaxSize: 50000
        },
        views: {
            engines: {
                hbs: require('handlebars')
            },
            path: './both/',
            layoutPath: './both/common/',
            layout: true,
            isCached: true
        }
    }

};