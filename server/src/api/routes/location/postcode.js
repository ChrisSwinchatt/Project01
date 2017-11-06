/**
 * /location/list endpoint handler.
 * @module api/routes/location/list
 */
const controller = require(`${SERVER_ROOT}/api/controller`);
const log        = require(`${SERVER_ROOT}/server/log`);
const model      = require(`${SERVER_ROOT}/api/model`);
const routes     = require(`${SERVER_ROOT}/api/routes`);

module.exports.REL    = 'get-postcode';

module.exports.METHOD = 'POST';

module.exports.CALLBACK = function(request, response) {
     log.debug(module);
     // TODO send actual postcode.
     return controller.doResponse(response, {
         'error':    0,
         'message':  'Success',
         'postcode': 'BN19RH',
         'links':    routes.endpoints
     });
 }
