'use strict';
var apiCtrl = require('../controllers');
module.exports = {
    get: {
        method: 'GET',
        path: '/api/data',
        config: apiCtrl.get
    },
    delete: {
        method: 'DELETE',
        path: '/api/data/{id}',
        config: apiCtrl.remove
    }
};