# Server

## Installation
You can install the server by running the following command:

```
 $ curl "https://raw.githubusercontent.com/SoftwareEngineeringG02/Project01/chris-server/server/install.sh" | /bin/bash
```

This will set up the environment with the correct version of Node and install the server's dependencies.

## Documentation
### JSDoc

Automatically generated code documentation can be found in the doc/ directory.

### API

The server uses a HATEOAS-like API with data transferred in JSON format.

#### Endpoints

The endpoints currently defined are:

rel              | href                  | methods | Effect
---------------- | --------------------- | --------| --
`index`          | `/`                   | `GET`   | Get a list of available endpoints
`get-location`   | `/location`           | `POST`  | Get the most recent location of the client if any
`set-location`   | `/location/update`    | `POST`  | Update the client's location
`list-location`  | `/location/list`      | `POST`  | Nothing - not implemented.
`get-postcode`   | `/location/postcode`  | `POST`  | Get the post code a location falls within
`get-price`      | `/price`              | `POST`  | Get the price a house was sold for if available
`map-price`      | `/price/map`          | `POST`  | Get a mapping of longitude/latitude to price within a radius
`postcode-price` | `/price/map/postcode` | `POST`  | Get a mapping of longitude/latitude to price within a postal area
``

 * Each endpoint responds only to the method listed in the table.
 * The reason for the `rel` column will become clear in the `Responses` section.

#### Requests

 * Requests to `get-location` and `set-location` should include a JSON object with at least the following fields:

 ```
 {
     id: A string which uniquely identifies the client, such as a phone number
     time: A 32-bit UNIX timestamp (i.e. integer seconds elapsed since 1 January 1970) of the time the request is sent
 }
 ```

 * When using the `set-location` endpoint the client should also include the `longitude` and `latitude` properties, which are double-precision floating point numbers defining its longitude and its latitude respectively.

#### Responses

Every response from the server will include a JSON object with at least the following properties:

```
{
    error:   0 (success) or 1 (failure),
    message: an error or other relevant message,
    links:   an array of objects which describe the endpoints available. For example:
            [{ rel:    the name of the endpoint,
               href:   the url of the endpoint,
               method: the HTTP method
            }]
}
```

 * Before making any other requests, clients should make a `GET` request to `/` which will return the above JSON object. Clients should then get the URL of the endpoint they want to use from the `links` array rather than hardcoding it. This allows the endpoint paths to be changed without breaking client code.

 * Clients should always check the value of the `error` field and report any errors to the user

 * When using the `get-location` endpoint, the response will include `longitude` and `latitude` properties, which are double-precision floating point numbers defining the longitude and its latitude respectively.
