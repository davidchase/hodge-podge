'use strict';
var basketCtrl = require('../controllers');
module.exports = {
    method: 'GET',
    path: '/basket',
    config: basketCtrl
};