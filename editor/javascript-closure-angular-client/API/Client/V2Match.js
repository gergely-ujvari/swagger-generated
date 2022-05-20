goog.provide('API.Client.v2_Match');

/**
 * @record
 */
API.Client.V2Match = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Match.prototype.id;

/**
 * @type {!API.Client.v2_MatchStatus}
 * @export
 */
API.Client.V2Match.prototype.status;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2Match.prototype.kickoffTime;

/**
 * @type {!API.Client.v2_MatchStage}
 * @export
 */
API.Client.V2Match.prototype.stage;

/**
 * @type {!API.Client.v2_Season}
 * @export
 */
API.Client.V2Match.prototype.season;

/**
 * @type {!API.Client.v2_Group}
 * @export
 */
API.Client.V2Match.prototype.group;

/**
 * @type {!API.Client.v2_MatchRound}
 * @export
 */
API.Client.V2Match.prototype.round;

/**
 * @type {!API.Client.v2_MatchTeamDto}
 * @export
 */
API.Client.V2Match.prototype.homeTeam;

/**
 * @type {!API.Client.v2_MatchTeamDto}
 * @export
 */
API.Client.V2Match.prototype.awayTeam;

/**
 * @type {!Array<!API.Client.v2_MatchReferee>}
 * @export
 */
API.Client.V2Match.prototype.referees;

/**
 * @type {!API.Client.v2_MatchVenue}
 * @export
 */
API.Client.V2Match.prototype.venue;

/**
 * @type {!number}
 * @export
 */
API.Client.V2Match.prototype.spectators;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Match.prototype.coverage;

/**
 * @type {!API.Client.v2_MatchMinute}
 * @export
 */
API.Client.V2Match.prototype.minute;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2Match.prototype.phaseStartedAt;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2Match.prototype.finishedAt;

/**
 * @type {!API.Client.v2_MatchScore}
 * @export
 */
API.Client.V2Match.prototype.score;

/** @enum {string} */
API.Client.V2Match.CoverageEnum = { 
  LIVE: 'LIVE',
  NOT_LIVE: 'NOT_LIVE',
  UNKNOWN: 'UNKNOWN',
}
