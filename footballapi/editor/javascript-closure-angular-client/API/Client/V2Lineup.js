goog.provide('API.Client.v2_Lineup');

/**
 * @record
 */
API.Client.V2Lineup = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Lineup.prototype.matchId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Lineup.prototype.status;

/**
 * @type {!API.Client.v2_LineupTeamDto}
 * @export
 */
API.Client.V2Lineup.prototype.homeTeam;

/**
 * @type {!API.Client.v2_LineupTeamDto}
 * @export
 */
API.Client.V2Lineup.prototype.awayTeam;

/** @enum {string} */
API.Client.V2Lineup.StatusEnum = { 
  CONFIRMED: 'CONFIRMED',
  UNCONFIRMED: 'UNCONFIRMED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
}
