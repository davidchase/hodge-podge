#!/usr/bin/env node

'use strict';

var Hapi = require('hapi');
var config = require('./server/config');
var routes = require('./server/routes');
var server = new Hapi.Server('localhost', config.port, config.options);

// Requires the Good logging plugin
require('./server/plugins')(server);

// Add the server routes
server.route(routes);

//Start the server
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});