/**
 * / endpoint handler.
 * @module api/routes/index
 */

var controller = require(`${SERVER_ROOT}/api/controller`);
var log        = require(`${SERVER_ROOT}/server/log`);

module.exports.REL      = 'index';

module.exports.METHOD   = 'GET';

module.exports.INPUTS   = {};

module.exports.CALLBACK = function() {
    log.debug(module.exports.REL);
    return Promise.resolve({'status': 200, 'body': {'error': 0, 'message': 'Success'}});
}
