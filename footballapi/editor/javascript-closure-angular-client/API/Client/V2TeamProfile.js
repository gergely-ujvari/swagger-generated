goog.provide('API.Client.v2_TeamProfile');

/**
 * @record
 */
API.Client.V2TeamProfile = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.threeLetterCode;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.shortName;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.type;

/**
 * @type {!number}
 * @export
 */
API.Client.V2TeamProfile.prototype.founded;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2TeamProfile.prototype.country;

/**
 * @type {!API.Client.v2_VenuesGetId}
 * @export
 */
API.Client.V2TeamProfile.prototype.venue;

/**
 * @type {!API.Client.TeamSocialDto}
 * @export
 */
API.Client.V2TeamProfile.prototype.social;

/**
 * @type {!API.Client.v2_Coach}
 * @export
 */
API.Client.V2TeamProfile.prototype.coach;

/**
 * @type {!API.Client.v2_President}
 * @export
 */
API.Client.V2TeamProfile.prototype.president;

/**
 * @type {!string}
 * @export
 */
API.Client.V2TeamProfile.prototype.gender;

/**
 * @type {!Array<!API.Client.v2_Season>}
 * @export
 */
API.Client.V2TeamProfile.prototype.activeSeasons;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.V2TeamProfile.prototype.shirtColors;

/** @enum {string} */
API.Client.V2TeamProfile.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
