goog.provide('API.Client.v2_MatchEventInput');

/**
 * @record
 */
API.Client.V2MatchEventInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEventInput.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEventInput.prototype.typeCode;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEventInput.prototype.teamPosition;

/**
 * @type {!number}
 * @export
 */
API.Client.V2MatchEventInput.prototype.minute;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEventInput.prototype.primaryPlayerId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchEventInput.prototype.secondaryPlayerId;

/**
 * Property is used to determine the order of events, if two or more events have the same minute
 * @type {!number}
 * @export
 */
API.Client.V2MatchEventInput.prototype.sortOrder;

/** @enum {string} */
API.Client.V2MatchEventInput.TypeCodeEnum = { 
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
API.Client.V2MatchEventInput.TeamPositionEnum = { 
  HOME: 'HOME',
  AWAY: 'AWAY',
}
