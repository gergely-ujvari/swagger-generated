goog.provide('API.Client.v2_MatchRefereeInput');

/**
 * @record
 */
API.Client.V2MatchRefereeInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchRefereeInput.prototype.refereeId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchRefereeInput.prototype.role;

/** @enum {string} */
API.Client.V2MatchRefereeInput.RoleEnum = { 
  REFEREE: 'REFEREE',
}
