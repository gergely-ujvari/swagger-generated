goog.provide('API.Client.TeamPlayerSeasonStatistics');

/**
 * @record
 */
API.Client.TeamPlayerSeasonStatistics = function() {}

/**
 * Unique identifier of the object
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerSeasonStatistics.prototype.id;

/**
 * Human readable name of the TournamentSeason
 * @type {!string}
 * @export
 */
API.Client.TeamPlayerSeasonStatistics.prototype.name;

/**
 * Whether the season is currently running or whether it is finished
 * @type {!boolean}
 * @export
 */
API.Client.TeamPlayerSeasonStatistics.prototype.active;

/**
 * Reference to the parent Tournament
 * @type {!API.Client.Tournament}
 * @export
 */
API.Client.TeamPlayerSeasonStatistics.prototype.tournament;

/**
 * @type {!Array<!API.Client.TeamPlayerStatistics>}
 * @export
 */
API.Client.TeamPlayerSeasonStatistics.prototype.items;

