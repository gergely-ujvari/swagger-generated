goog.provide('API.Client.TeamScore');

/**
 * @record
 */
API.Client.TeamScore = function() {}

/**
 * Score at the halftime break
 * @type {!number}
 * @export
 */
API.Client.TeamScore.prototype.halfTime;

/**
 * Score in regular time + injury time
 * @type {!number}
 * @export
 */
API.Client.TeamScore.prototype.ordinaryTime;

/**
 * Score in extra time, does not include the score for ordinary time
 * @type {!number}
 * @export
 */
API.Client.TeamScore.prototype.extraTime;

/**
 * Score in penalty shootout, does not include ordinarytime or extratime
 * @type {!number}
 * @export
 */
API.Client.TeamScore.prototype.penaltyShootout;

