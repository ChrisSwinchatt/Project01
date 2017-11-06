/**
 * /price/map/postcode endpoint handler.
 * @module api/routes/price/map/postcode
 */
const controller = require(`${SERVER_ROOT}/api/controller`);
const log        = require(`${SERVER_ROOT}/server/log`);
const routes     = require(`${SERVER_ROOT}/api/routes`);

module.exports.REL    = 'postcode-price';
module.exports.METHOD = 'POST';

module.exports.CALLBACK = function(request, response) {
    log.debug(module);
    // Try to extract `id`, `time`, `longitude`, `latitude` and 'radius' JSON properties.
    const elems = {
        id:        'string',
        time:      'number',
        longitude: 'number',
        latitude:  'number',
        radius:    'string'
    };
    controller.getRequestBody(request, (body) => {
        // Extract the inputs.
        const object = util.getJsonElements(body, elems);
        if (typeof object !== 'object' || object == null) {
            return controller.badRequest(request, response);
        }
        const { id, time, longitude, latitude, radius } = object;
        if (util.isNullOrUndefined(id)
         || util.isNullOrUndefined(time)
         || util.isNullOrUndefined(longitude)
         || util.isNullOrUndefined(latitude)
         || util.isNullOrUndefined(radius)) {
            return controller.badRequest(request, response, 'Incomplete request');
        }
        /* TODO - get this from SQL database.
         */
        var map = [
            { 'longitude': 0.00, 'latitude': 0.09, 'price': 9999991 },
            { 'longitude': 0.01, 'latitude': 0.08, 'price': 9999910 },
            { 'longitude': 0.02, 'latitude': 0.07, 'price': 9999911 },
            { 'longitude': 0.03, 'latitude': 0.06, 'price': 9999100 },
            { 'longitude': 0.04, 'latitude': 0.05, 'price': 9999101 },
            { 'longitude': 0.05, 'latitude': 0.04, 'price': 9999110 },
            { 'longitude': 0.06, 'latitude': 0.03, 'price': 9999111 },
            { 'longitude': 0.07, 'latitude': 0.02, 'price': 9991000 },
            { 'longitude': 0.08, 'latitude': 0.01, 'price': 9991001 },
            { 'longitude': 0.09, 'latitude': 0.00, 'price': 9991010 }
        ];
        // Find all the data within the radius.
        controller.doResponse(response, {
            'error':   0,
            'message': 'Success',
            'map':     map,
            'links':   routes.endpoints
        });
    });
}
