goog.provide('API.Client.v2_Venues');

/**
 * @record
 */
API.Client.V2Venues = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Venues.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Venues.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2Venues.prototype.country;

/**
 * @type {!API.Client.v2_City}
 * @export
 */
API.Client.V2Venues.prototype.city;

/**
 * @type {!API.Client.VenueProfileDto}
 * @export
 */
API.Client.V2Venues.prototype.profile;

