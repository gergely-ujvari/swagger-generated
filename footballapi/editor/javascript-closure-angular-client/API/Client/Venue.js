goog.provide('API.Client.Venue');

/**
 * @record
 */
API.Client.Venue = function() {}

/**
 * Unique identifier in the system
 * @type {!number}
 * @export
 */
API.Client.Venue.prototype.id;

/**
 * Human readable name of the Venue
 * @type {!string}
 * @export
 */
API.Client.Venue.prototype.name;

/**
 * Country where the stadium is located
 * @type {!API.Client.Country}
 * @export
 */
API.Client.Venue.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.Venue.prototype.city;

/**
 * 600x450 image of the Venue
 * @type {!string}
 * @export
 */
API.Client.Venue.prototype.urlImage;

/**
 * Total capacity of the stadium
 * @type {!number}
 * @export
 */
API.Client.Venue.prototype.capacity;

/**
 * Latitude coordinate of the stadium's location
 * @type {!number}
 * @export
 */
API.Client.Venue.prototype.lat;

/**
 * Longitude coordinate of the stadium's location
 * @type {!number}
 * @export
 */
API.Client.Venue.prototype.lng;

