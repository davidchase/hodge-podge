'use strict';
var basketService = require('../../../../server/basket/services');
var template = require('../../../../both/basket/views/index.hbs');
var pubsub = require('../../common/pubsub');
var internals = {};

internals.removeClass = function(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

var BasketCtrl = function() {
    this.action = document.getElementById('action-button');
    this.container = document.getElementById('container');
    this.siteData = this.container.getAttribute('data-site');
    this.siteConfig = this.siteData !== '' && JSON.parse(this.siteData);

    //initialize
    this.applySiteConfig();
    this.showAction();
    this.bindEvents();
    this.updateTotals();
};

var BasketCtrlProto = BasketCtrl.prototype;

BasketCtrlProto.applySiteConfig = function() {
    var gift = this.container.querySelector('.gift-wrap');
    if (!gift) {
        return;
    }
    if (this.siteConfig && this.siteConfig.displayGiftWrap) {
        internals.removeClass(gift, 'hide');
    }
};

BasketCtrlProto.showAction = function() {
    var products = this.container.querySelector('.basket--product');
    if (this.action && products) {
        internals.removeClass(this.action, 'hide');
    }
};

BasketCtrlProto.removeBasketItem = function(e) {
    if (e.target.className.indexOf('remove-item') === -1) {
        return;
    }
    var button = e.target;
    var index = button.getAttribute('data-index');
    var quantity = button.getAttribute('data-quantity');
    var price = button.getAttribute('data-price');
    basketService.removeItem(index)
        .then(function(data) {
            var rendered = template({
                basket: data.entity
            });
            this.container.innerHTML = rendered;
            this.applySiteConfig();
            this.showAction();
            pubsub.publish('quantityUpdate', quantity);
            pubsub.publish('priceUpdate', price);
        }.bind(this))
        .otherwise(function(response) {
            console.error('response error: ', response);
        });
};

BasketCtrlProto.updateTotals = function() {
    var priceTotal = document.querySelector('.price-total');
    pubsub.subscribe('priceUpdate', function(price) {
        var currentTotal = parseInt(priceTotal.textContent, 10);
        var newTotal = parseInt(price, 10);
        var currentBasket = priceTotal.textContent = currentTotal - newTotal;
        if (currentBasket === 0) {
            this.action.classList.add('hide');
        }

    }.bind(this));
};

BasketCtrlProto.bindEvents = function() {
    this.container.addEventListener('click', this.removeBasketItem.bind(this), false);
    if (!this.container.querySelector('.baskset-sector')) {
        this.container.removeEventListener('click', this.removeBasketItem.bind(this), false);
    }
};

module.exports = new BasketCtrl();