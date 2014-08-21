'use strict';
module.exports = {
    index: {
        handler: function(request, reply) {
            reply.redirect('/basket');
        }
    },
    missing: {
        handler: function(request, reply) {
            reply('The page you request could not be found').code(404);
        }
    },
    staticFiles: {
        handler: {
            file: function(request) {
                return './client/dist/' + request.params.ext + '/' + request.params.filename;
            }
        },
        cache: {
            privacy: 'public',
            expiresIn: 864 * 31 * 100 * 1000
        }
    }
};