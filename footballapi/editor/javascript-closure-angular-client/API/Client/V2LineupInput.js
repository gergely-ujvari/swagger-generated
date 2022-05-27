goog.provide('API.Client.v2_LineupInput');

/**
 * @record
 */
API.Client.V2LineupInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2LineupInput.prototype.status;

/**
 * @type {!API.Client.v2_LineupTeamInput}
 * @export
 */
API.Client.V2LineupInput.prototype.homeTeam;

/**
 * @type {!API.Client.v2_LineupTeamInput}
 * @export
 */
API.Client.V2LineupInput.prototype.awayTeam;

/** @enum {string} */
API.Client.V2LineupInput.StatusEnum = { 
  CONFIRMED: 'CONFIRMED',
  UNCONFIRMED: 'UNCONFIRMED',
}
