goog.provide('API.Client.BasicPlayerStats');

/**
 * @record
 */
API.Client.BasicPlayerStats = function() {}

/**
 * Total goals scored
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.played;

/**
 * Total minutes played
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.minutes;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.redCards;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.yellowCards;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.assists;

/**
 * Goals conceded (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.conceded;

/**
 * Games started as a substitute
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.substitute;

/**
 * Games without allowing a goal (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.cleansheets;

/**
 * Games where the player has come on
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.substituteIn;

/**
 * Games where the player has come off
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.substituteOut;

/**
 * Minutes played after coming on as a substitute
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.minutesSubstitute;

/**
 * Player information
 * @type {!API.Client.Player}
 * @export
 */
API.Client.BasicPlayerStats.prototype.player;

/**
 * Player's shirt number during the season
 * @type {!number}
 * @export
 */
API.Client.BasicPlayerStats.prototype.shirtNumber;

