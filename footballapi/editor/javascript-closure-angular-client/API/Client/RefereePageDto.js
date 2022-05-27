goog.provide('API.Client.RefereePageDto');

/**
 * @record
 */
API.Client.RefereePageDto = function() {}

/**
 * @type {!Array<!API.Client.RefereeDto>}
 * @export
 */
API.Client.RefereePageDto.prototype.referees;

/**
 * @type {!API.Client.PageMetaDto}
 * @export
 */
API.Client.RefereePageDto.prototype.pageMeta;

