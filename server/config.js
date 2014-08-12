'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    hapi: {
        options: {
            cache: {
                engine: require('catbox-memory')
            },
            views: {
                engines: {
                    hbs: require('handlebars')
                },
                basePath: rootPath,
                path: './client/src/',
                layoutPath: './client/src/common/',
                partialsPath: './client/src/basket/views/',
                layout: true
            }
        }
    }
};