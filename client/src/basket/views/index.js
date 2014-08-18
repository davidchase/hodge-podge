'use strict';
var basketService = require('../../../../server/basket/services');
var pubsub = require('../../common/pubsub');
var template = require('../../../../both/basket/views/index.hbs');
var container = document.getElementById('container');
var siteData = container.getAttribute('data-site');
var siteConfig = siteData !== '' && JSON.parse(siteData);
var gift = container.querySelector('.gift-wrap');

if (siteConfig && siteConfig.displayGiftWrap) {
    gift.classList.remove('hide');
}

container.addEventListener('click', function(e) {
    if (e.target.className.indexOf('re-render') === -1) {
        return;
    }
    var button = e.target;
    basketService.getBasket()
        .then(function(data) {
            var rendered = template({
                basket: data.entity
            });
            container.innerHTML = rendered;
        })
        .otherwise(function(response) {
            console.error('response error: ', response);
        });
}, false);

container.addEventListener('click', function(e) {
    if (e.target.className.indexOf('remove-item') === -1) {
        return;
    }
    var button = e.target;
    var index = button.getAttribute('data-index');
    var quantity = button.getAttribute('data-quantity');
    basketService.removeItem(index)
        .then(function(data) {
            var rendered = template({
                basket: data.entity
            });
            container.innerHTML = rendered;
            pubsub.publish('quantityUpdate', quantity);
        })
        .otherwise(function(response) {
            console.error('response error: ', response);
        });
}, false);