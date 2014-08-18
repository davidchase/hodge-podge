'use strict';
var miscCtrl = require('../controllers');
module.exports = {
    index: {
        method: 'GET',
        path: '/',
        config: miscCtrl.index
    },
    staticFiles: {
        method: 'GET',
        path: '/static/{ext}/{filename}',
        config: miscCtrl.staticFiles
    },
    missing: {
        method: '*',
        path: '/{param*}',
        config: miscCtrl.missing
    }
};