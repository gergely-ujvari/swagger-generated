goog.provide('API.Client.PlayerPageDto');

/**
 * @record
 */
API.Client.PlayerPageDto = function() {}

/**
 * @type {!Array<!API.Client.PlayerDto>}
 * @export
 */
API.Client.PlayerPageDto.prototype.players;

/**
 * @type {!API.Client.PageMetaDto}
 * @export
 */
API.Client.PlayerPageDto.prototype.pageMeta;

