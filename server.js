#!/usr/bin/env node

'use strict';

var Hapi = require('hapi');
var config = require('./server/config');
var server = new Hapi.Server('localhost', config.port, config.options);
var routes = require('./server/routes')(server);

// Requires the Good logging plugin
require('./server/plugins')(server);

// Add the server routes
server.route(routes);

//Start the server
server.start(function() {
    console.log('Server started at: ' + server.info.uri);
});