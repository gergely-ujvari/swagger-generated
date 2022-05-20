goog.provide('API.Client.ListVenueDto');

/**
 * @record
 */
API.Client.ListVenueDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.ListVenueDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.ListVenueDto.prototype.name;

/**
 * @type {!API.Client.CountryDto}
 * @export
 */
API.Client.ListVenueDto.prototype.country;

/**
 * @type {!API.Client.CityDto}
 * @export
 */
API.Client.ListVenueDto.prototype.city;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.ListVenueDto.prototype.profile;

