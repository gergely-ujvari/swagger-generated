goog.provide('API.Client.RefereeEditDto');

/**
 * @record
 */
API.Client.RefereeEditDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeEditDto.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.RefereeEditDto.prototype.countryId;

/**
 * @type {!Date}
 * @export
 */
API.Client.RefereeEditDto.prototype.birthdate;

/**
 * @type {!boolean}
 * @export
 */
API.Client.RefereeEditDto.prototype.active;

