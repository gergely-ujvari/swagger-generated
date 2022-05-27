goog.provide('API.Client.TournamentSeason');

/**
 * @record
 */
API.Client.TournamentSeason = function() {}

/**
 * Unique identifier of the object
 * @type {!number}
 * @export
 */
API.Client.TournamentSeason.prototype.id;

/**
 * Human readable name of the TournamentSeason
 * @type {!string}
 * @export
 */
API.Client.TournamentSeason.prototype.name;

/**
 * Whether the season is currently running or whether it is finished
 * @type {!boolean}
 * @export
 */
API.Client.TournamentSeason.prototype.active;

