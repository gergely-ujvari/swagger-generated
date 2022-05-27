goog.provide('API.Client.VenueEditDto');

/**
 * @record
 */
API.Client.VenueEditDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.VenueEditDto.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.VenueEditDto.prototype.countryId;

/**
 * @type {!string}
 * @export
 */
API.Client.VenueEditDto.prototype.cityId;

/**
 * @type {!API.Client.VenueProfileDto}
 * @export
 */
API.Client.VenueEditDto.prototype.profile;

