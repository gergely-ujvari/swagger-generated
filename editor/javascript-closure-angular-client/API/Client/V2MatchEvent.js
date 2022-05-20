goog.provide('API.Client.v2_MatchEvent');

/**
 * @record
 */
API.Client.V2MatchEvent = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEvent.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEvent.prototype.matchId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEvent.prototype.typeCode;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEvent.prototype.teamPosition;

/**
 * @type {!number}
 * @export
 */
API.Client.V2MatchEvent.prototype.minute;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEvent.prototype.teamId;

/**
 * @type {!API.Client.v2_Player}
 * @export
 */
API.Client.V2MatchEvent.prototype.primaryPlayer;

/**
 * @type {!API.Client.v2_Player}
 * @export
 */
API.Client.V2MatchEvent.prototype.secondaryPlayer;

/**
 * @type {!API.Client.v2_TeamScore}
 * @export
 */
API.Client.V2MatchEvent.prototype.score;

/** @enum {string} */
API.Client.V2MatchEvent.TypeCodeEnum = { 
  YELLOW_RED_CARD: 'YELLOW_RED_CARD',
  PENALTY_SHOOTOUT_MISSED: 'PENALTY_SHOOTOUT_MISSED',
  PENALTY_SHOOTOUT_SCORED: 'PENALTY_SHOOTOUT_SCORED',
  SUBSTITUTION: 'SUBSTITUTION',
  GOAL: 'GOAL',
  RED_CARD: 'RED_CARD',
  PENALTY_MISS: 'PENALTY_MISS',
  YELLOW_CARD: 'YELLOW_CARD',
  ASSIST: 'ASSIST',
  PENALTY_GOAL: 'PENALTY_GOAL',
  OWN_GOAL: 'OWN_GOAL',
}
/** @enum {string} */
API.Client.V2MatchEvent.TeamPositionEnum = { 
  HOME: 'HOME',
  AWAY: 'AWAY',
}
