'use strict';
var miscCtrl = require('../../controllers/misc');
module.exports = {
    index: {
        method: 'GET',
        path: '/',
        config: miscCtrl.index
    },
    staticFiles: {
        method: 'GET',
        path: '/static/js/{filename?}',
        config: miscCtrl.staticFiles
    },
    missing: {
        method: '*',
        path: '/{param*}',
        config: miscCtrl.missing
    }
};