goog.provide('API.Client.v2_TournamentGroupUpdateInput');

/**
 * @record
 */
API.Client.V2TournamentGroupUpdateInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupUpdateInput.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TournamentGroupUpdateInput.prototype.description;

/**
 * @type {!Array<!API.Client.TournamentItemDto>}
 * @export
 */
API.Client.V2TournamentGroupUpdateInput.prototype.tournaments;

