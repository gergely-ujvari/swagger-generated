goog.provide('API.Client.v2_Team');

/**
 * @record
 */
API.Client.V2Team = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.threeLetterCode;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.shortName;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.type;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2Team.prototype.country;

/**
 * @type {!API.Client.v2_VenuesGetId}
 * @export
 */
API.Client.V2Team.prototype.venue;

/**
 * @type {!API.Client.TeamSocialDto}
 * @export
 */
API.Client.V2Team.prototype.social;

/**
 * @type {!number}
 * @export
 */
API.Client.V2Team.prototype.founded;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Team.prototype.gender;

/** @enum {string} */
API.Client.V2Team.TypeEnum = { 
  PLACEHOLDER: 'PLACEHOLDER',
  NATIONAL: 'NATIONAL',
  CLUB: 'CLUB',
}
/** @enum {string} */
API.Client.V2Team.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
