goog.provide('API.Client.PlayerStatsBasic');

/**
 * @record
 */
API.Client.PlayerStatsBasic = function() {}

/**
 * Total goals scored
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.played;

/**
 * Total minutes played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.minutes;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.redCards;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.yellowCards;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsBasic.prototype.assists;

