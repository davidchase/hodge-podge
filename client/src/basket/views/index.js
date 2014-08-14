'use strict';
var basketService = function() {
    this.rest = require('rest');
    this.mime = require('rest/interceptor/mime');
    this.errorCode = require('rest/interceptor/errorCode');
};
var basketProto = basketService.prototype;

basketProto.getBasket = function() {
    var client = this.rest.wrap(this.mime).wrap(this.errorCode);
    return client({
        path: 'http://localhost:3000/api/dat'
    });
};


module.exports = new basketService();