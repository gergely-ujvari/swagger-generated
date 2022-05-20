goog.provide('API.Client.TournamentDto');

/**
 * Resource representing a Football Tournament such as A Grupa, Premier League, Champions League, World Cup, etc. Does not represent a specific season such as Premier League 2015/2016.
 * @record
 */
API.Client.TournamentDto = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.TournamentDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.TournamentDto.prototype.name;

/**
 * @type {!API.Client.v1_CountryDto}
 * @export
 */
API.Client.TournamentDto.prototype.country;

/**
 * @type {!boolean}
 * @export
 */
API.Client.TournamentDto.prototype.regionalLeague;

/**
 * @type {!string}
 * @export
 */
API.Client.TournamentDto.prototype.urlLogo;

