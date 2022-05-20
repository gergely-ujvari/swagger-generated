goog.provide('API.Client.TeamPlayer');

/**
 * @record
 */
API.Client.TeamPlayer = function() {}

/**
 * Shirt number which the player wears for the team
 * @type {!number}
 * @export
 */
API.Client.TeamPlayer.prototype.shirtNumber;

/**
 * Whether the player is on loan with the team
 * @type {!boolean}
 * @export
 */
API.Client.TeamPlayer.prototype.loan;

/**
 * Whether the person is currently part of the Team
 * @type {!boolean}
 * @export
 */
API.Client.TeamPlayer.prototype.active;

/**
 * Date when the Person joined the team
 * @type {!API.Client.date}
 * @export
 */
API.Client.TeamPlayer.prototype.startDate;

/**
 * Date when the Person left the team (if any)
 * @type {!API.Client.date}
 * @export
 */
API.Client.TeamPlayer.prototype.endDate;

/**
 * Information for the Player
 * @type {!API.Client.Player}
 * @export
 */
API.Client.TeamPlayer.prototype.player;

