'use strict';
var angular = require('angular');
var basketCtrl = require('./basketCtrl');
var config = require('../common/config');

module.exports = angular.module('basket', [])
    .config(config)
    .controller('basketCtrl', basketCtrl);