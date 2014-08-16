'use strict';
var basketView = require('./basket/views');
var shippingView = require('./shipping/views');
var miscView = require('./misc/views');
var apiView = require('./api/views');

module.exports = function(server) {
    var views = [
        basketView,
        shippingView,
        miscView.missing,
        miscView.index,
        miscView.staticFiles,
        apiView.get,
        apiView.delete
    ];
    return views;
};