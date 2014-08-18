'use strict';
var basketService = require('../services');
var siteConfig = {
    "FP": {
        "name": "Free People",
        "displayGiftWrap": true,
        "action": {
            "label": "Checkout",
            "url": "/shipping"
        }
    },
    "Anthro": {
        "name": "Anthropologie",
        "displayGiftWrap": false,
        "action": {
            "label": "Express Checkout",
            "url": "/review"
        }
    },
};
module.exports = {
    handler: function(request, reply) {
        var isite = request.query.site || 'FP';
        var site = siteConfig[isite];
        basketService.getBasket()
            .then(function(response) {
                reply.view('./basket/views/index', {
                    basket: response.entity,
                    totalCartCount: response.entity.totalCartCount,
                    site: site,
                    siteData: JSON.stringify(site),
                    action: site['action']
                });
            })
            .otherwise(function(response) {
                reply('response error: ' + response.entity);
            });
    },
    cache: {
        privacy: 'public',
        expiresIn: 864 * 31 * 100 * 1000
    }
};