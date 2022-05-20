goog.provide('API.Client.v2_TournamentGroupGetOutput');

/**
 * @record
 */
API.Client.V2TournamentGroupGetOutput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupGetOutput.prototype.code;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupGetOutput.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupGetOutput.prototype.description;

/**
 * @type {!Array<!API.Client.v2_TournamentItemOutput>}
 * @export
 */
API.Client.V2TournamentGroupGetOutput.prototype.tournaments;

