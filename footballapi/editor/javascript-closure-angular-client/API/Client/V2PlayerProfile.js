goog.provide('API.Client.v2_PlayerProfile');

/**
 * @record
 */
API.Client.V2PlayerProfile = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerProfile.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerProfile.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2PlayerProfile.prototype.country;

/**
 * @type {!boolean}
 * @export
 */
API.Client.V2PlayerProfile.prototype.active;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerProfile.prototype.birthdate;

/**
 * @type {!API.Client.v2_City}
 * @export
 */
API.Client.V2PlayerProfile.prototype.birthCity;

/**
 * @type {!API.Client.PlayerProfileDto}
 * @export
 */
API.Client.V2PlayerProfile.prototype.profile;

/**
 * @type {!API.Client.PlayerEditSocialDto}
 * @export
 */
API.Client.V2PlayerProfile.prototype.social;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerProfile.prototype.position;

/**
 * @type {!Array<!API.Client.v2_PlayerActiveClub>}
 * @export
 */
API.Client.V2PlayerProfile.prototype.teams;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerProfile.prototype.gender;

/** @enum {string} */
API.Client.V2PlayerProfile.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
