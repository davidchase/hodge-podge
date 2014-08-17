'use strict';


var _checkEvent = function(e) {
    if (Object.prototype.toString.call(e) !== '[object String]') {
        throw new TypeError('Event is not a string.');
    }
};

var _checkHandler = function(handler) {
    if (typeof handler !== 'function') {
        throw new TypeError('Handler is not a function');
    }
};

var handlers = {};
/**
 * Publish + Subscribe Module
 */
var pubsub = {
    /**
     * publish
     * @memberof module:common/pubsub
     * @public
     * @method
     */
    publish: function(e) {
        _checkEvent(e);

        if (!handlers[e]) {
            return;
        }

        var context = {
            e: e,
            args: [].slice.call(arguments, 1)
        };

        for (var i = 0, l = handlers[e].length; i < l; i++) {
            handlers[e][i].apply(context, context.args);
        }
    },
    /**
     * subscribe
     * @memberof module:common/pubsub
     * @public
     * @method
     */
    subscribe: function(e, handler) {
        _checkEvent(e);
        _checkHandler(handler);
        (handlers[e] = handlers[e] || []).push(handler);
    },
    /**
     * unsubscribe
     * @memberof module:common/pubsub
     * @public
     * @method
     */
    unsubscribe: function() {
        var args = [].slice.call(arguments);
        var e = args[0];
        var handler = args[1];

        _checkEvent(e);
        _checkHandler(handler);

        if (e in handlers === false) {
            return;
        }
        handlers[e].splice(handlers[e].indexOf(handler), 1);
    }
};
/**
 * @module common/pubsub
 */
module.exports = pubsub;