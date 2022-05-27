goog.provide('API.Client.PlayerStatistics');

/**
 * @record
 */
API.Client.PlayerStatistics = function() {}

/**
 * Total goals scored
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.goals;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.played;

/**
 * Total minutes played
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.minutes;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.redCards;

/**
 * Number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.yellowCards;

/**
 * Number of assists
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.assists;

/**
 * Goals conceded (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.conceded;

/**
 * Games started as a substitute
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.substitute;

/**
 * Games without allowing a goal (Goalkeeper)
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.cleansheets;

/**
 * Games where the player has come on
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.substituteIn;

/**
 * Games where the player has come off
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.substituteOut;

/**
 * Minutes played after coming on as a substitute
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.minutesSubstitute;

/**
 * @type {!API.Client.TournamentSeasonWithTournament}
 * @export
 */
API.Client.PlayerStatistics.prototype.tournamentSeason;

/**
 * Player Information
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.PlayerStatistics.prototype.player;

/**
 * Team for which the Player competes
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.PlayerStatistics.prototype.team;

/**
 * Shirt number of the player during the TournamentSeason
 * @type {!number}
 * @export
 */
API.Client.PlayerStatistics.prototype.shirtNumber;

/**
 * Position of the player during the TournamentSeason
 * @type {!string}
 * @export
 */
API.Client.PlayerStatistics.prototype.position;

