goog.provide('API.Client.Country');

/**
 * @record
 */
API.Client.Country = function() {}

/**
 * Unique identifier of the object within the system
 * @type {!number}
 * @export
 */
API.Client.Country.prototype.id;

/**
 * Human known name of the Country
 * @type {!string}
 * @export
 */
API.Client.Country.prototype.name;

/**
 * 2 letter country code if available
 * @type {!string}
 * @export
 */
API.Client.Country.prototype.code;

/**
 * Image of the flag for the Country
 * @type {!string}
 * @export
 */
API.Client.Country.prototype.urlFlag;

