goog.provide('API.Client.v2_PlayerStatisticInput');

/**
 * @record
 */
API.Client.V2PlayerStatisticInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerStatisticInput.prototype.playerId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerStatisticInput.prototype.matchId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerStatisticInput.prototype.teamId;

/**
 * @type {!Array<!API.Client.PlayerStatisticItem>}
 * @export
 */
API.Client.V2PlayerStatisticInput.prototype.statistics;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerStatisticInput.prototype.origin;

