goog.provide('API.Client.StandingData');

/**
 * @record
 */
API.Client.StandingData = function() {}

/**
 * Position of the team/player in the standing
 * @type {!number}
 * @export
 */
API.Client.StandingData.prototype.rank;

/**
 * Reference to the team in the Standing (for league) or the Team for which the Player competes (topscorer, cardlist)
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.StandingData.prototype.team;

/**
 * List of applicable rules to the current standing rank
 * @type {!Array<!API.Client.StandingRule>}
 * @export
 */
API.Client.StandingData.prototype.rules;

