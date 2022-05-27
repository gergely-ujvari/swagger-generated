goog.provide('API.Client.TeamSeasonStatistics');

/**
 * @record
 */
API.Client.TeamSeasonStatistics = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.TeamSeasonStatistics.prototype.teamId;

/**
 * Latest league stage during the TournamentSeason
 * @type {!API.Client.TournamentSeasonStage}
 * @export
 */
API.Client.TeamSeasonStatistics.prototype.latestLeagueStage;

/**
 * Player statistics for the TournamentSeason
 * @type {!Array<!API.Client.BasicPlayerStats>}
 * @export
 */
API.Client.TeamSeasonStatistics.prototype.playerStatistics;

