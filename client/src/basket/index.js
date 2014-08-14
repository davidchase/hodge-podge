'use strict';
var basketService = require('./views');
var template = require('./views/index.hbs');
var container = document.getElementById('container');
basketService.getBasket()
    .then(function(response) {
        console.log('response: ', response);
    })
    .otherwise(function(response) {
        console.error('response error: ', response);
    });