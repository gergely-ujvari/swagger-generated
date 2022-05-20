goog.provide('API.Client.v2_TournamentGroupInsertInput');

/**
 * @record
 */
API.Client.V2TournamentGroupInsertInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupInsertInput.prototype.code;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupInsertInput.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupInsertInput.prototype.description;

/**
 * @type {!Array<!API.Client.TournamentItemDto>}
 * @export
 */
API.Client.V2TournamentGroupInsertInput.prototype.tournaments;

