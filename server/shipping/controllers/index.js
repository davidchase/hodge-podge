'use strict';

module.exports = {
    handler: function(request, reply) {
        reply.view('./shipping/views/index');
    }
};