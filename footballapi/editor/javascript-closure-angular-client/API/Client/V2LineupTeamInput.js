goog.provide('API.Client.v2_LineupTeamInput');

/**
 * @record
 */
API.Client.V2LineupTeamInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2LineupTeamInput.prototype.formation;

/**
 * @type {!string}
 * @export
 */
API.Client.V2LineupTeamInput.prototype.coachId;

/**
 * @type {!Array<!API.Client.v2_LineupPlayerInput>}
 * @export
 */
API.Client.V2LineupTeamInput.prototype.players;

