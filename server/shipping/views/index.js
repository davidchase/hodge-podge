var shippingCtrl = require('../controllers');
module.exports = {
    shipping: {
        method: 'GET',
        path: '/shipping',
        config: shippingCtrl
    }
};