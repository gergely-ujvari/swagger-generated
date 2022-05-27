goog.provide('API.Client.PartialTournamentSeasonStage');

/**
 * @record
 */
API.Client.PartialTournamentSeasonStage = function() {}

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.id;

/**
 * Human readable name of the TournamentSeasonStage
 * @type {!string}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.name;

/**
 * Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
 * @type {!boolean}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.cup;

/**
 * Id of the TournamentSeason in which the stage is part of
 * @type {!number}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.tournamentSeasonId;

/**
 * Id of the Tournament in whicth the stage is part of
 * @type {!number}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.tournamentId;

/**
 * Reference to the Country where the TournamentSeasonStage is held
 * @type {!API.Client.Country}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.country;

/**
 * Indicates which confederation the stage is part of (for World Cup qualif.)
 * @type {!string}
 * @export
 */
API.Client.PartialTournamentSeasonStage.prototype.confederation;

