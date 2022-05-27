goog.provide('API.Client.v2_LineupTeamDto');

/**
 * @record
 */
API.Client.V2LineupTeamDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2LineupTeamDto.prototype.formation;

/**
 * @type {!API.Client.v2_Coach}
 * @export
 */
API.Client.V2LineupTeamDto.prototype.coach;

/**
 * @type {!string}
 * @export
 */
API.Client.V2LineupTeamDto.prototype.teamId;

/**
 * @type {!Array<!API.Client.v2_LineupPlayerDto>}
 * @export
 */
API.Client.V2LineupTeamDto.prototype.players;

