goog.provide('API.Client.LeagueStandingData');

/**
 * @record
 */
API.Client.LeagueStandingData = function() {}

/**
 * Position of the team/player in the standing
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.rank;

/**
 * Information about the Team (and TeamForm) in the current rank
 * @type {!API.Client.PartialTeamWithForm}
 * @export
 */
API.Client.LeagueStandingData.prototype.team;

/**
 * List of applicable rules to the current standing rank
 * @type {!Array<!API.Client.StandingRule>}
 * @export
 */
API.Client.LeagueStandingData.prototype.rules;

/**
 * Games won
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.wins;

/**
 * Games drawn
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.draws;

/**
 * Total games played
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.played;

/**
 * Number of points
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.points;

/**
 * Games lost
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.defeits;

/**
 * Total number of goals scored
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.goalsFor;

/**
 * Total number of goals conceded
 * @type {!number}
 * @export
 */
API.Client.LeagueStandingData.prototype.goalsAgainst;

