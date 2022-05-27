goog.provide('API.Client.v2_KnockoutMatch');

/**
 * @record
 */
API.Client.V2KnockoutMatch = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2KnockoutMatch.prototype.id;

/**
 * @type {!Date}
 * @export
 */
API.Client.V2KnockoutMatch.prototype.kickoffTime;

/**
 * @type {!API.Client.v2_MatchScore}
 * @export
 */
API.Client.V2KnockoutMatch.prototype.score;

/**
 * @type {!string}
 * @export
 */
API.Client.V2KnockoutMatch.prototype.homeTeamId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2KnockoutMatch.prototype.awayTeamId;

