'use strict';
var glob = require('glob');
var filepaths = glob.sync('./tasks/**/*.js');

// load gulp tasks from directory
filepaths.forEach(function(filepath) {
    require(filepath);
});