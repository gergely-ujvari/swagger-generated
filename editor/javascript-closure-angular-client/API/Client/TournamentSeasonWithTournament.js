goog.provide('API.Client.TournamentSeasonWithTournament');

/**
 * @record
 */
API.Client.TournamentSeasonWithTournament = function() {}

/**
 * Unique identifier of the object
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonWithTournament.prototype.id;

/**
 * Human readable name of the TournamentSeason
 * @type {!string}
 * @export
 */
API.Client.TournamentSeasonWithTournament.prototype.name;

/**
 * Whether the season is currently running or whether it is finished
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeasonWithTournament.prototype.active;

/**
 * Reference to the parent Tournament
 * @type {!API.Client.Tournament}
 * @export
 */
API.Client.TournamentSeasonWithTournament.prototype.tournament;

