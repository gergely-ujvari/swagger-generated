goog.provide('API.Client.EventsByDate');

/**
 * @record
 */
API.Client.EventsByDate = function() {}

/**
 * @type {!API.Client.date}
 * @export
 */
API.Client.EventsByDate.prototype.date;

/**
 * @type {!Array<!API.Client.Event>}
 * @export
 */
API.Client.EventsByDate.prototype.items;

