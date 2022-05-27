goog.provide('API.Client.TeamPlayerStatistics');

/**
 * @record
 */
API.Client.TeamPlayerStatistics = function() {}

/**
 * Total goals scored
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.played;

/**
 * Total minutes played
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.minutes;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.redCards;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.yellowCards;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.assists;

/**
 * Goals conceded (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.conceded;

/**
 * Games started as a substitute
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.substitute;

/**
 * Games without allowing a goal (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.cleansheets;

/**
 * Games where the player has come on
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.substituteIn;

/**
 * Games where the player has come off
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.substituteOut;

/**
 * Minutes played after coming on as a substitute
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.minutesSubstitute;

/**
 * @type {!API.Client.Player}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.player;

/**
 * @type {!API.Client.Team}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.team;

/**
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerStatistics.prototype.shirtNumber;

