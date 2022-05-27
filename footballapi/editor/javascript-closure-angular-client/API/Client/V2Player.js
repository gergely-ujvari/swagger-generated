goog.provide('API.Client.v2_Player');

/**
 * @record
 */
API.Client.V2Player = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Player.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Player.prototype.name;

/**
 * @type {!API.Client.v2_Country}
 * @export
 */
API.Client.V2Player.prototype.country;

/**
 * @type {!boolean}
 * @export
 */
API.Client.V2Player.prototype.active;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Player.prototype.birthdate;

/**
 * @type {!API.Client.v2_City}
 * @export
 */
API.Client.V2Player.prototype.birthCity;

/**
 * @type {!API.Client.PlayerProfileDto}
 * @export
 */
API.Client.V2Player.prototype.profile;

/**
 * @type {!API.Client.PlayerEditSocialDto}
 * @export
 */
API.Client.V2Player.prototype.social;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Player.prototype.position;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Player.prototype.gender;

/** @enum {string} */
API.Client.V2Player.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
