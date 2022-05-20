goog.provide('API.Client.TournamentSeasonStage');

/**
 * @record
 */
API.Client.TournamentSeasonStage = function() {}

/**
 * Date when the first game of the stage is held
 * @type {!API.Client.date}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.startDate;

/**
 * Date when the final game of the stage is held
 * @type {!API.Client.date}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.endDate;

/**
 * Whether the stage is a qualification stage to a main Tournrament (Champions League Qualification)
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.qualification;

/**
 * Whether the API has live scores for the stage
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.live;

/**
 * Number of groups in the stage. Only available if the stage has groups (Champions League Group Stage)
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.stageGroups;

/**
 * League standing data if available and if cup = false
 * @type {!Array<!API.Client.LeagueStandingData>}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.standing;

/**
 * List of rounds in the Stage if cup = true
 * @type {!Array<!API.Client.Round>}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.rounds;

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.id;

/**
 * Human readable name of the TournamentSeasonStage
 * @type {!string}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.name;

/**
 * Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.cup;

/**
 * Id of the TournamentSeason in which the stage is part of
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.tournamentSeasonId;

/**
 * Id of the Tournament in whicth the stage is part of
 * @type {!number}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.tournamentId;

/**
 * Reference to the Country where the TournamentSeasonStage is held
 * @type {!API.Client.Country}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.country;

/**
 * Indicates which confederation the stage is part of (for World Cup qualif.)
 * @type {!string}
 * @export
 */
API.Client.TournamentSeasonStage.prototype.confederation;

