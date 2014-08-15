'use strict';
var apiCtrl = require('./controllers/api');
var basketView = require('./views/basket');
var shippingView = require('./views/shipping');
var miscView = require('./views/misc');

module.exports = function(server) {
    var views = [
        basketView,
        shippingView,
        miscView.missing,
        miscView.index,
        miscView.staticFiles,
        {
            method: 'GET',
            path: '/api/data',
            config: apiCtrl.get

    }, {
            method: 'DELETE',
            path: '/api/data/{id}',
            config: apiCtrl.remove

    }];
    return views;
};