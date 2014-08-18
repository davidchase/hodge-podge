'use strict';

var fs = require('fs');
var dataJSON = './server/data.json';
module.exports = {
    remove: {
        handler: function(request, reply) {
            var id = request.params.id;
            var json;
            var writable;
            fs.readFile(dataJSON, 'utf-8', function(err, data) {
                if (err) {
                    throw err;
                }
                json = JSON.parse(data);
                json.items.splice(id, 1);
                writable = JSON.stringify(json);
                fs.writeFile(dataJSON, writable, function(err) {
                    if (err) {
                        throw err;
                    }
                });
                reply(json);
            });
        }
    },
    get: {
        handler: function(request, reply) {
            var sourceJSON = './server/source.json';
            var json;
            fs.readFile(sourceJSON, 'utf-8', function(err, data) {
                if (err) {
                    throw err;
                }
                var json = JSON.parse(data);
                reply(json);
                fs.writeFile(dataJSON, data, function(err) {
                    if (err) {
                        throw err;
                    }
                });
            });

        }
    }
};