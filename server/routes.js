'use strict';
var basketService = require('./index');
var fs = require('fs');
var json = {
    "_id": "53ea5cb8dab531ea7fe2e33f",
    "index": 0,
    "guid": "4f2f1bb2-dc11-4d6c-87f0-becb9ce94d01",
    "isActive": true,
    "subtotal": "$3,064.73",
    "items": [
        {
            "id": 0,
            "description": "dolor ex",
            "quantity": 3
    },
        {
            "id": 1,
            "description": "fugiat laboris",
            "quantity": 1
    },
        {
            "id": 2,
            "description": "amet esse",
            "quantity": 6
    }
  ]
};
module.exports = function(server) {
    var views = [{
            method: 'GET',
            path: '/',
            handler: function(request, reply) {
                reply.redirect('/basket');
            }
    }, {
            method: 'GET',
            path: '/basket',
            config: {
                handler: function(request, reply) {
                    basketService.getBasket()
                        .then(function(response) {
                            reply.view('./basket/views/index', {
                                basket: response.entity,
                                quantity: response.entity.quantity
                            });
                        })
                        .otherwise(function(response) {
                            reply('response error: ' + response.entity);
                        });
                },
                cache: {
                    privacy: 'public',
                    expiresAt: '00:24'
                }
            }
    },
        {
            method: 'GET',
            path: '/shipping',
            config: {
                handler: function(request, reply) {
                    reply.view('./shipping/views/index');
                },
                cache: {
                    privacy: 'public',
                    expiresAt: '00:24'
                }
            }
    }, {
            method: 'GET',
            path: '/static/js/{filename?}',
            handler: {
                file: function(request) {
                    return './client/dist/js/' + request.params.filename;
                }
            },
            config: {
                cache: {
                    privacy: 'public',
                    expiresAt: '00:24'
                }
            }
    }, {
            method: 'GET',
            path: '/api/data',
            handler: {
                file: './server/data.json'
            }

    }, {
            method: 'DELETE',
            path: '/api/data/{id}',
            handler: function(request, reply) {
                var id = request.params.id;
                json.items.splice(id, 1);
                reply(json);
            }
    },
        {
            method: '*',
            path: '/{param*}',
            handler: function(request, reply) {
                reply('The page you request could not be found').code(404);
            }
    }];
    return views;
};