goog.provide('API.Client.v2_Season');

/**
 * @record
 */
API.Client.V2Season = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2Season.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2Season.prototype.name;

/**
 * @type {!API.Client.v2_Tournament}
 * @export
 */
API.Client.V2Season.prototype.tournament;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.V2Season.prototype.status;

