goog.provide('API.Client.VenueDto');

/**
 * @record
 */
API.Client.VenueDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.VenueDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.VenueDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.VenueDto.prototype.country;

/**
 * @type {!API.Client.CityDto}
 * @export
 */
API.Client.VenueDto.prototype.city;

/**
 * @type {!API.Client.VenueProfileDto}
 * @export
 */
API.Client.VenueDto.prototype.profile;

