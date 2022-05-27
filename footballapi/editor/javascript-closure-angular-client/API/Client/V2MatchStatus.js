goog.provide('API.Client.v2_MatchStatus');

/**
 * @record
 */
API.Client.V2MatchStatus = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStatus.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStatus.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStatus.prototype.shortName;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStatus.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStatus.prototype.code;

/** @enum {string} */
API.Client.V2MatchStatus.TypeEnum = { 
  FINISHED: 'FINISHED',
  NOT_STARTED: 'NOT_STARTED',
  LIVE: 'LIVE',
  INTERRUPTED: 'INTERRUPTED',
  CANCELLED: 'CANCELLED',
  UNKNOWN: 'UNKNOWN',
}
