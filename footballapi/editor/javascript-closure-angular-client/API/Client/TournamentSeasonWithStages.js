goog.provide('API.Client.TournamentSeasonWithStages');

/**
 * @record
 */
API.Client.TournamentSeasonWithStages = function() {}

/**
 * Unique identifier of the object
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonWithStages.prototype.id;

/**
 * Human readable name of the TournamentSeason
 * @type {!string}
 * @export
 */
API.Client.TournamentSeasonWithStages.prototype.name;

/**
 * Whether the season is currently running or whether it is finished
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeasonWithStages.prototype.active;

/**
 * Reference to the parent Tournament
 * @type {!API.Client.Tournament}
 * @export
 */
API.Client.TournamentSeasonWithStages.prototype.tournament;

/**
 * List of stages which take place during the TournamentSeason. If the parent Tournament has regional_league = true, this will usually be one stage with cup = false.
 * @type {!Array<!API.Client.TournamentSeasonStage>}
 * @export
 */
API.Client.TournamentSeasonWithStages.prototype.stages;

