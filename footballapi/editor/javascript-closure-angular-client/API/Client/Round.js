goog.provide('API.Client.Round');

/**
 * @record
 */
API.Client.Round = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Round.prototype.round;

/**
 * @type {!Date}
 * @export
 */
API.Client.Round.prototype.startTime;

/**
 * @type {!Date}
 * @export
 */
API.Client.Round.prototype.endTime;

/**
 * @type {!Array<!API.Client.PartialEvent>}
 * @export
 */
API.Client.Round.prototype.events;

