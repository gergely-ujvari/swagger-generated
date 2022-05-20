goog.provide('API.Client.EventTeamStats');

/**
 * @record
 */
API.Client.EventTeamStats = function() {}

/**
 * The Team whose stats are represented in the object
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.EventTeamStats.prototype.team;

/**
 * Whether the stats are for the home or the away team
 * @type {!boolean}
 * @export
 */
API.Client.EventTeamStats.prototype.homeTeam;

/**
 * Object containing the team statistics
 * @type {!API.Client.TeamStatistics}
 * @export
 */
API.Client.EventTeamStats.prototype.statistics;

/**
 * Identifier of the event the stat is related to
 * @type {!number}
 * @export
 */
API.Client.EventTeamStats.prototype.eventId;

