goog.provide('API.Client.CoachPageDto');

/**
 * @record
 */
API.Client.CoachPageDto = function() {}

/**
 * @type {!Array<!API.Client.CoachDto>}
 * @export
 */
API.Client.CoachPageDto.prototype.coaches;

/**
 * @type {!API.Client.PageMetaDto}
 * @export
 */
API.Client.CoachPageDto.prototype.pageMeta;

