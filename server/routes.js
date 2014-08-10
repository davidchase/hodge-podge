'use strict';
// For now just exporting
// array of objects for routes
// later may export a function to
// add some controllers

module.exports = [{
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        reply('Hello, world!');
    }
}, {
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        reply('Hello, again!');
    }
}];