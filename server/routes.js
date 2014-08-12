'use strict';
// For now just exporting
// array of objects for routes
// later may export a function to
// add some controllers
var nipple = require('nipple');
module.exports = function(server) {
    var views = [{
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                reply('Hello, world!');
            }
    }, {
            method: 'GET',
            path: '/basket',
            handler: function(request, reply) {
                reply.proxy({
                    uri: 'http://localhost:3000/api/data',
                    onResponse: function(err, res, request, reply) {
                        if (err) {
                            return;
                        }
                        // Response is a stream :)
                        // convert to buffer > string > json
                        nipple.read(res, function(err, body) {
                            var data = JSON.parse(body.toString());
                            reply.view('./basket/views/index', {
                                basket: data
                            }, {
                                title: 'Basket'
                            });
                        });
                    }
                });

            }
    },
        {
            method: 'GET',
            path: '/shipping',
            handler: function(request, reply) {
                reply.view('./shipping/views/index', {
                    title: 'Shipping'
                });
            }
    }, {
            method: 'GET',
            path: '/{param*}',
            handler: {
                directory: {
                    path: './client/dist/'
                }
            }
    }, {
            method: 'GET',
            path: '/api/data',
            handler: {
                file: './server/data.json'
            }

    }];
    return views;
};