goog.provide('API.Client.TeamLineup');

/**
 * @record
 */
API.Client.TeamLineup = function() {}

/**
 * resource id of the team
 * @type {!number}
 * @export
 */
API.Client.TeamLineup.prototype.teamId;

/**
 * List of players involved for the team
 * @type {!Array<!API.Client.EventPlayer>}
 * @export
 */
API.Client.TeamLineup.prototype.players;

/**
 * Information about the team's Coach
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.TeamLineup.prototype.coach;

/**
 * Lineup formation
 * @type {!string}
 * @export
 */
API.Client.TeamLineup.prototype.formation;

