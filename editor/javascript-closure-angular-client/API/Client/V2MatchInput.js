goog.provide('API.Client.v2_MatchInput');

/**
 * @record
 */
API.Client.V2MatchInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.statusId;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2MatchInput.prototype.kickoffTime;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.stageId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.homeTeamId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.awayTeamId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.roundKey;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.groupId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.venueId;

/**
 * @type {!Array<!API.Client.v2_MatchRefereeInput>}
 * @export
 */
API.Client.V2MatchInput.prototype.referees;

/**
 * @type {!API.Client.v2_MatchScoreInput}
 * @export
 */
API.Client.V2MatchInput.prototype.score;

/**
 * @type {!number}
 * @export
 */
API.Client.V2MatchInput.prototype.spectators;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchInput.prototype.coverage;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2MatchInput.prototype.finishedAt;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2MatchInput.prototype.phaseStartedAt;

/** @enum {string} */
API.Client.V2MatchInput.CoverageEnum = { 
  LIVE: 'LIVE',
  NOT_LIVE: 'NOT_LIVE',
  UNKNOWN: 'UNKNOWN',
}
