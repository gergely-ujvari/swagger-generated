goog.provide('API.Client.EventStatus');

/**
 * @record
 */
API.Client.EventStatus = function() {}

/**
 * Status classification
 * @type {!string}
 * @export
 */
API.Client.EventStatus.prototype.type;

/**
 * Human readable name describing the status, can be translated
 * @type {!string}
 * @export
 */
API.Client.EventStatus.prototype.name;

/**
 * Human readable short name describing the status, can be translated
 * @type {!string}
 * @export
 */
API.Client.EventStatus.prototype.shortName;

/**
 * Unique string used to identify the status
 * @type {!string}
 * @export
 */
API.Client.EventStatus.prototype.code;

/** @enum {string} */
API.Client.EventStatus.TypeEnum = { 
  finished: 'finished',
  cancelled: 'cancelled',
  notstarted: 'notstarted',
  interrupted: 'interrupted',
  inprogress: 'inprogress',
}
/** @enum {string} */
API.Client.EventStatus.CodeEnum = { 
  finished: 'finished',
  not_started: 'not_started',
  1st_half: '1st_half',
  2nd_half: '2nd_half',
}
