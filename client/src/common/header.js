'use strict';
var pubsub = require('./pubsub');
var basketCount = document.querySelector('.basket-count');
module.exports = function() {
    pubsub.subscribe('quantityUpdate', function(data) {
        var currentCount = parseInt(basketCount.textContent, 10);
        var newCount = parseInt(data, 10);
        basketCount.textContent = currentCount - newCount;
    });
};