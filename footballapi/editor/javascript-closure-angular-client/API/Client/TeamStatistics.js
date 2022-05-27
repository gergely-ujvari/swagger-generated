goog.provide('API.Client.TeamStatistics');

/**
 * @record
 */
API.Client.TeamStatistics = function() {}

/**
 * Number of keys passes completed
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.pass;

/**
 * Percentage of time the team possess the ball
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.possession;

/**
 * Number of goals scored
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.goals;

/**
 * Number of corners
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.corners;

/**
 * Number of crosses
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.crosses;

/**
 * Number of offsides
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.offside;

/**
 * Shots on that have hit target
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.shotsOn;

/**
 * Number of shots that have been blocked by an opposition player
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.shotsBlocked;

/**
 * Shots outside the target
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.shotsOff;

/**
 * Number of throw ins taken
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.throwIn;

/**
 * Number of goal kicks taken
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.goalKicks;

/**
 * Number of treatments to injuries
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.treatments;

/**
 * Total numer of yellow cards
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.yellowCards;

/**
 * Number of substitutions
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.substitutions;

/**
 * Number of counter attacks
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.counterAttacks;

/**
 * Total number of fouls committed by the Team
 * @type {!number}
 * @export
 */
API.Client.TeamStatistics.prototype.foulsCommitted;

