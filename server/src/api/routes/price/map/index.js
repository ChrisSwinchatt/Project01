/**
 * /price/map endpoint handler.
 * @module api/routes/price/map
 */
const controller = require(`${SERVER_ROOT}/api/controller`);
const log        = require(`${SERVER_ROOT}/server/log`);
const routes     = require(`${SERVER_ROOT}/api/routes`);

module.exports.REL    = 'map-price';
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
            { 'longitude': 0.00, 'latitude': 0.90, 'price': 1000000 },
            { 'longitude': 0.10, 'latitude': 0.80, 'price': 2000000 },
            { 'longitude': 0.20, 'latitude': 0.70, 'price': 3000000 },
            { 'longitude': 0.30, 'latitude': 0.60, 'price': 4000000 },
            { 'longitude': 0.40, 'latitude': 0.50, 'price': 5000000 },
            { 'longitude': 0.50, 'latitude': 0.40, 'price': 5000000 },
            { 'longitude': 0.60, 'latitude': 0.30, 'price': 4000000 },
            { 'longitude': 0.70, 'latitude': 0.20, 'price': 3000000 },
            { 'longitude': 0.80, 'latitude': 0.10, 'price': 2000000 },
            { 'longitude': 0.90, 'latitude': 0.00, 'price': 1000000 }
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
