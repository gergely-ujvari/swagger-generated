goog.provide('API.Client.TopscorerStandingData');

/**
 * @record
 */
API.Client.TopscorerStandingData = function() {}

/**
 * Position of the team/player in the standing
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.rank;

/**
 * Reference to the team in the Standing (for league) or the Team for which the Player competes (topscorer, cardlist)
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.TopscorerStandingData.prototype.team;

/**
 * List of applicable rules to the current standing rank
 * @type {!Array<!API.Client.StandingRule>}
 * @export
 */
API.Client.TopscorerStandingData.prototype.rules;

/**
 * Information about the Player
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.TopscorerStandingData.prototype.player;

/**
 * Number of goals scored
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.played;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.assists;

/**
 * Total number of minutes played
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.minutes;

/**
 * Number of goals scored from the penalty spot
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.penalties;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.redCards;

/**
 * Number of times the player scored first for the team
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.scoredFirst;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.TopscorerStandingData.prototype.yellowCards;

