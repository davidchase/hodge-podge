'use strict';

var angular = require('angular');
var shippingCtrl = require('./shippingCtrl');
var config = require('../common/config');

module.exports = angular.module('shipping', [])
    .config(config)
    .controller('shippingCtrl', shippingCtrl);