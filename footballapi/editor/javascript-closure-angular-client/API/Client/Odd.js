goog.provide('API.Client.Odd');

/**
 * @record
 */
API.Client.Odd = function() {}

/**
 * Reference to the OddProvider which provides the betting offers
 * @type {!API.Client.OddProvider}
 * @export
 */
API.Client.Odd.prototype.oddProvider;

/**
 * Id of the event for which odds are provided
 * @type {!number}
 * @export
 */
API.Client.Odd.prototype.eventId;

