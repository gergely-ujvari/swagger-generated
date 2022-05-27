goog.provide('API.Client.OutputDto');

/**
 * @record
 */
API.Client.OutputDto = function() {}

/**
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.OutputDto.prototype.player;

/**
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.OutputDto.prototype.team;

/**
 * @type {!API.Client.TournamentSeason}
 * @export
 */
API.Client.OutputDto.prototype.season;

/**
 * @type {!API.Client.Tournament}
 * @export
 */
API.Client.OutputDto.prototype.tournament;

