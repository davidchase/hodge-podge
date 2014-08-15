'use strict';

var internals = {};

internals.json = {
    "id": "53ea5cb8dab531ea7fe2e33f",
    "index": 0,
    "guid": "4f2f1bb2-dc11-4d6c-87f0-becb9ce94d01",
    "totalCartCount": 3,
    "items": [
        {
            "id": 0,
            "sku": "32766057",
            "description": "FL LTHR STRAPPY GLADIATOR",
            "displayName": "Tulpen Flats",
            "imageUrl": "//images.anthropologie.com/is/image/Anthropologie/32766057_007_b?$cat$",
            "giftWrappable": true,
            "price": 198,
            "amount": 396,
            "quantity": 2
    },
        {
            "id": 1,
            "sku": "33028986",
            "description": "NKL VINTAGE CLUSTER",
            "displayName": "North Sea Necklace",
            "imageUrl": "//images.anthropologie.com/is/image/Anthropologie/33028986_040_b?$cat$",
            "giftWrappable": false,
            "price": 88,
            "amount": 88,
            "quantity": 1
    }
  ],
    "pricing": {
        "amount": 484.0,
        "shipping": 10.95,
        "tax": 0,
        "total": 494.95
    }
};
module.exports = {
    remove: {
        handler: function(request, reply) {
            var id = request.params.id;
            internals.json.items.splice(id, 1);
            reply(internals.json);
        }
    },
    get: {
        handler: function(request, reply) {
            reply.file('./server/data.json');
        }
    }
};