goog.provide('API.Client.EventPlayerType');

/**
 * @record
 */
API.Client.EventPlayerType = function() {}

/**
 * Indicates what part of the lineup the player belongs to
 * @type {!string}
 * @export
 */
API.Client.EventPlayerType.prototype.category;

/**
 * Human readable name of the type
 * @type {!string}
 * @export
 */
API.Client.EventPlayerType.prototype.name;

/**
 * Internal unique code to identify the type
 * @type {!string}
 * @export
 */
API.Client.EventPlayerType.prototype.code;

/** @enum {string} */
API.Client.EventPlayerType.CategoryEnum = { 
  miss: 'miss',
  sub: 'sub',
  start: 'start',
  unknown: 'unknown',
}
