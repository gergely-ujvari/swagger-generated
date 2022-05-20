goog.provide('API.Client.StageGroupWithStandingTournamentSeasonStage');

/**
 * @record
 */
API.Client.StageGroupWithStandingTournamentSeasonStage = function() {}

/**
 * Unique resource identifier
 * @type {!number}
 * @export
 */
API.Client.StageGroupWithStandingTournamentSeasonStage.prototype.id;

/**
 * Human readable name of the Group
 * @type {!string}
 * @export
 */
API.Client.StageGroupWithStandingTournamentSeasonStage.prototype.name;

/**
 * The order in the stage of the group
 * @type {!number}
 * @export
 */
API.Client.StageGroupWithStandingTournamentSeasonStage.prototype.orderInStage;

/**
 * League Standing for the StageGroup if available and requested
 * @type {!Array<!API.Client.LeagueStandingData>}
 * @export
 */
API.Client.StageGroupWithStandingTournamentSeasonStage.prototype.standing;

/**
 * Reference to the TournamentSeasonStage the group is a part of
 * @type {!API.Client.TournamentSeasonStage}
 * @export
 */
API.Client.StageGroupWithStandingTournamentSeasonStage.prototype.tournamentSeasonStage;

