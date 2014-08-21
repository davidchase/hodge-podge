'use strict';
var basketView = require('./basket/views');
var shippingView = require('./shipping/views');
var miscView = require('./misc/views');
var apiView = require('./api/views');
var glob = require('glob');
var path = require('path');

var getRoutes = glob.sync(path.join(__dirname, '**/views/*.js'));
var allRoutes = [];


module.exports = function(server) {
    var views = [
        basketView.basket,
        shippingView.shipping,
        miscView.missing,
        miscView.index,
        miscView.staticFiles,
        apiView.get,
        apiView.delete
    ];
    return views;
};