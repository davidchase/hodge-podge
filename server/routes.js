'use strict';
// For now just exporting
// array of objects for routes
// later may export a function to
// add some controllers
var nipple = require('nipple');
var basketService = require('../client/src/basket/views');
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
            basketService.getBasket()
                .then(function(response) {
                    reply.view('./basket/views/index', {
                        basket: response.entity
                    });
                })
                .otherwise(function(response) {
                    reply('response error: ' + response.entity);
                });

            nipple.get('http://localhost:3000/api/data', function(err, res, payload) {
                var data = JSON.parse(payload);
                reply.view('./basket/views/index', {
                    basket: data,
                });
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
            path: '/static/{param*}',
            handler: {
                directory: {
                    path: './client/dist/'
                }
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresIn: 120000
                }
            }
    }, {
            method: 'GET',
            path: '/api/data',
            handler: {
                file: './server/data.json'
            }

    }, {
            method: '*',
            path: '/{param*}',
            handler: function(request, reply) {
                reply('The page you request could not be found').code(404);
            }
    }];
    return views;
};