'use strict';
module.exports = function() {
    var request = require('reqwest');
    var template = require('./index.hbs');
    var Handlebars = require('hbsfy/runtime');
    Handlebars.registerPartial('quickPartial', require('./quickPartial.hbs'));

    var reRender = function() {
        request({
            url: 'http://localhost:3000/api/data',
            type: 'JSON',
        })
            .then(function(resp) {
                var data = JSON.parse(resp.response);
                var rendered = template({
                    basket: data
                });
                var container = document.getElementById('container');
                container.innerHTML = rendered;
            }).fail(function(err, msg) {
                throw new Error(err);
            });
    };

    var renderBtn = document.querySelector('.re-render');
    renderBtn.addEventListener('click', reRender, false);
};