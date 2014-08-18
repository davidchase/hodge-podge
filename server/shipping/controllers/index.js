'use strict';

module.exports = {
    handler: function(request, reply) {
        reply.view('./shipping/views/index');
    },
    cache: {
        privacy: 'public',
        expiresIn: 864 * 31 * 100 * 1000
    }
};