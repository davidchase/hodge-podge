'use strict';

module.exports = function(server) {
    var options = {
        subscribers: {
            'console': ['ops', 'request', 'log', 'error']
        }
    };

    server.pack.register({
        plugin: require('good'),
        options: options
    }, function(err) {
        if (err) {
            console.log(err);
            return;
        }
    });
};