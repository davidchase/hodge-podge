'use strict';
var basketCtrl = require('../controllers');
module.exports = {
    basket: {
        method: 'GET',
        path: '/basket',
        config: basketCtrl
    }
};