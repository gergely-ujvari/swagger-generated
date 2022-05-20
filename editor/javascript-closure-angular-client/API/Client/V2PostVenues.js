goog.provide('API.Client.v2_post_venues');

/**
 * @record
 */
API.Client.V2PostVenues = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2PostVenues.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PostVenues.prototype.countryId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PostVenues.prototype.cityId;

/**
 * @type {!API.Client.VenueProfileDto}
 * @export
 */
API.Client.V2PostVenues.prototype.profile;

