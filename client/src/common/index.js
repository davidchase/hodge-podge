'use strict';
var angular = require('angular');
var basket = require('../basket');
var shipping = require('../shipping');
var container = document.getElementById('container');
angular.bootstrap(container, [
    basket.name,
    shipping.name
]);