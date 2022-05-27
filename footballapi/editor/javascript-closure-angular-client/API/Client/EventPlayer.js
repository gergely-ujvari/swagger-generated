goog.provide('API.Client.EventPlayer');

/**
 * @record
 */
API.Client.EventPlayer = function() {}

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.EventPlayer.prototype.id;

/**
 * Object describing the player in the lineup
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.EventPlayer.prototype.player;

/**
 * Object describing the type of lineup
 * @type {!API.Client.EventPlayerType}
 * @export
 */
API.Client.EventPlayer.prototype.eventPlayerType;

/**
 * Whether the player is from the home or the away team
 * @type {!boolean}
 * @export
 */
API.Client.EventPlayer.prototype.homeTeam;

/**
 * Number indicating the player's vertical position on the field. 1 = Goalkeeper, 2-5 = Defender, 6-9 = Midfielder, 10-11 = Forward, where 5 is an offensive defender, 9 is an offensive midfielder, etc.
 * @type {!number}
 * @export
 */
API.Client.EventPlayer.prototype.positionX;

/**
 * Number indicating the player's horizontal position on the field. Ranges from 1-9, where 1 = furthest right, 9 = furthest left.
 * @type {!number}
 * @export
 */
API.Client.EventPlayer.prototype.positionY;

/**
 * Number 1-11 indicating the player's position in the lineup. 1 = goalkeeper, 2 = defender furthest right.
 * @type {!number}
 * @export
 */
API.Client.EventPlayer.prototype.positionNumber;

/**
 * The shirt number the player is wearing
 * @type {!number}
 * @export
 */
API.Client.EventPlayer.prototype.shirtNumber;

