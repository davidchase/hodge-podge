'use strict';

module.exports = function(server) {
    var options = {
        maxLogSize: 1024 * 1024 * 1024,
        subscribers: {
            'console': ['request', 'log', 'error'],
            'tmp/logs/': ['ops', 'request', 'log', 'error'],
        }
    };

    server.pack.register({
        plugin: require('good'),
        options: options
    }, function(err) {
        if (err) {
            throw err;
        }
    });
};