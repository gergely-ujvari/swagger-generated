goog.provide('API.Client.PlayerStatsExtended');

/**
 * @record
 */
API.Client.PlayerStatsExtended = function() {}

/**
 * Total goals scored
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.played;

/**
 * Total minutes played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.minutes;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.redCards;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.yellowCards;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.assists;

/**
 * Goals conceded (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.conceded;

/**
 * Games started as a substitute
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.substitute;

/**
 * Games without allowing a goal (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.cleansheets;

/**
 * Games where the player has come on
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.substituteIn;

/**
 * Games where the player has come off
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.substituteOut;

/**
 * Minutes played after coming on as a substitute
 * @type {!number}
 * @export
 */
API.Client.PlayerStatsExtended.prototype.minutesSubstitute;

