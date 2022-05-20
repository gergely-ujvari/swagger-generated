goog.provide('API.Client.v2_VenuesPut');

/**
 * @record
 */
API.Client.V2VenuesPut = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2VenuesPut.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2VenuesPut.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2VenuesPut.prototype.country;

/**
 * @type {!API.Client.v2_City}
 * @export
 */
API.Client.V2VenuesPut.prototype.city;

/**
 * @type {!API.Client.VenueProfileDto}
 * @export
 */
API.Client.V2VenuesPut.prototype.profile;

