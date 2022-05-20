goog.provide('API.Client.PlayerEditDto');

/**
 * @record
 */
API.Client.PlayerEditDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerEditDto.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerEditDto.prototype.countryId;

/**
 * @type {!boolean}
 * @export
 */
API.Client.PlayerEditDto.prototype.active;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerEditDto.prototype.birthdate;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerEditDto.prototype.birthCityId;

/**
 * @type {!API.Client.PlayerProfileDto}
 * @export
 */
API.Client.PlayerEditDto.prototype.profile;

/**
 * @type {!API.Client.PlayerEditSocialDto}
 * @export
 */
API.Client.PlayerEditDto.prototype.social;

/**
 * @type {!string}
 * @export
 */
API.Client.PlayerEditDto.prototype.position;

