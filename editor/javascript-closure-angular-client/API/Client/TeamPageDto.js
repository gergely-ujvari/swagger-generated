goog.provide('API.Client.TeamPageDto');

/**
 * @record
 */
API.Client.TeamPageDto = function() {}

/**
 * @type {!Array<!API.Client.v2_Team>}
 * @export
 */
API.Client.TeamPageDto.prototype.teams;

/**
 * @type {!API.Client.PageMetaDto}
 * @export
 */
API.Client.TeamPageDto.prototype.pageMeta;

