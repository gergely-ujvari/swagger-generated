goog.provide('API.Client.TeamPlayerData');

/**
 * @record
 */
API.Client.TeamPlayerData = function() {}

/**
 * Shirt number which the player wears for the team
 * @type {!number}
 * @export
 */
API.Client.TeamPlayerData.prototype.shirtNumber;

/**
 * Whether the player is on loan with the team
 * @type {!boolean}
 * @export
 */
API.Client.TeamPlayerData.prototype.loan;

/**
 * Whether the person is currently part of the Team
 * @type {!boolean}
 * @export
 */
API.Client.TeamPlayerData.prototype.active;

/**
 * Date when the Person joined the team
 * @type {!API.Client.date}
 * @export
 */
API.Client.TeamPlayerData.prototype.startDate;

/**
 * Date when the Person left the team (if any)
 * @type {!API.Client.date}
 * @export
 */
API.Client.TeamPlayerData.prototype.endDate;

