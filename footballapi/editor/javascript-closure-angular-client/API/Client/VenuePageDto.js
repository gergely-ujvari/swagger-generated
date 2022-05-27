goog.provide('API.Client.VenuePageDto');

/**
 * @record
 */
API.Client.VenuePageDto = function() {}

/**
 * @type {!Array<!API.Client.VenueDto>}
 * @export
 */
API.Client.VenuePageDto.prototype.venues;

/**
 * @type {!API.Client.PageMetaDto}
 * @export
 */
API.Client.VenuePageDto.prototype.pageMeta;

