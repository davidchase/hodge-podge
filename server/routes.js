'use strict';
// For now just exporting
// array of objects for routes
// later may export a function to
// add some controllers

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
            reply.view('./basket/views/index', {
                    title: 'Basket'
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
                    path: './client/dist/js'
                }
            }
    }];
    return views;
};