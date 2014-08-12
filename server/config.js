'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    hapi: {
        options: {
            views: {
                engines: {
                    html: require('handlebars')
                },
                basePath: rootPath,
                path: './client/src/',
                layoutPath: './client/src/common/',
                layout: true
            }
        }
    }
};