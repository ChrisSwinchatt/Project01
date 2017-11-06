/**
 * /price endpoint handler.
 * @module api/routes/price/index
 */
const controller = require(`${SERVER_ROOT}/api/controller`);
const log        = require(`${SERVER_ROOT}/server/log`);
const routes     = require(`${SERVER_ROOT}/api/routes`);

module.exports.REL    = 'get-price';
module.exports.METHOD = 'POST';

module.exports.CALLBACK = function(request, response) {
    log.debug(module);
    return controller.doResponse(response, {
        'error':     0,
        'message':   'Success',
        'price':     1000000,
        'links':     routes.endpoints
    });
}
