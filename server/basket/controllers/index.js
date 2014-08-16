'use strict';
var basketService = require('../services');
var siteConfig = {
    "FP": {
        "name": "Free People",
        "displayGiftWrap": true
    },
    "Anthro": {
        "name": "Anthropologie",
        "displayGiftWrap": false

    }
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
                    siteData: JSON.stringify(site)
                });
            })
            .otherwise(function(response) {
                reply('response error: ' + response.entity);
            });
    },
    cache: {
        privacy: 'public',
        expiresAt: '00:24'
    }
};