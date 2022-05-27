goog.provide('API.Client.EventPlayerSubOn');

/**
 * @record
 */
API.Client.EventPlayerSubOn = function() {}

/**
 * Id of the player that comes on
 * @type {!number}
 * @export
 */
API.Client.EventPlayerSubOn.prototype.playerId;

/**
 * Name of the player that comes on
 * @type {!string}
 * @export
 */
API.Client.EventPlayerSubOn.prototype.playerName;

/**
 * The minute when the substitued occured
 * @type {!number}
 * @export
 */
API.Client.EventPlayerSubOn.prototype.elapsed;

