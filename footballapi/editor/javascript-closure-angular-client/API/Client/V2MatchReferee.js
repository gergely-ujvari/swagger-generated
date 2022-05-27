goog.provide('API.Client.v2_MatchReferee');

/**
 * @record
 */
API.Client.V2MatchReferee = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchReferee.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchReferee.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchReferee.prototype.role;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchReferee.prototype.gender;

/** @enum {string} */
API.Client.V2MatchReferee.RoleEnum = { 
  REFEREE: 'REFEREE',
}
/** @enum {string} */
API.Client.V2MatchReferee.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
