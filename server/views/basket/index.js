'use strict';
var basketCtrl = require('../../controllers/basket');
module.exports = {
    method: 'GET',
    path: '/basket',
    config: basketCtrl
};