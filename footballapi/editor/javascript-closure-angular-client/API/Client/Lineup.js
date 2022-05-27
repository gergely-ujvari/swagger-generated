goog.provide('API.Client.Lineup');

/**
 * @record
 */
API.Client.Lineup = function() {}

/**
 * Id of the event for which the lineup is for
 * @type {!number}
 * @export
 */
API.Client.Lineup.prototype.eventId;

/**
 * Whether the lineup is officially confirmed. Should be considered probable if != true
 * @type {!boolean}
 * @export
 */
API.Client.Lineup.prototype.confirmed;

/**
 * Lineup information for home team
 * @type {!API.Client.TeamLineup}
 * @export
 */
API.Client.Lineup.prototype.homeTeam;

/**
 * Lineup information for away team
 * @type {!API.Client.TeamLineup}
 * @export
 */
API.Client.Lineup.prototype.awayTeam;

