goog.provide('API.Client.PlayerTeam');

/**
 * @record
 */
API.Client.PlayerTeam = function() {}

/**
 * Shirt number which the player wears for the team
 * @type {!number}
 * @export
 */
API.Client.PlayerTeam.prototype.shirtNumber;

/**
 * Whether the player is on loan with the team
 * @type {!boolean}
 * @export
 */
API.Client.PlayerTeam.prototype.loan;

/**
 * Whether the person is currently part of the Team
 * @type {!boolean}
 * @export
 */
API.Client.PlayerTeam.prototype.active;

/**
 * Date when the Person joined the team
 * @type {!API.Client.date}
 * @export
 */
API.Client.PlayerTeam.prototype.startDate;

/**
 * Date when the Person left the team (if any)
 * @type {!API.Client.date}
 * @export
 */
API.Client.PlayerTeam.prototype.endDate;

/**
 * Reference to the Team the player participates in
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.PlayerTeam.prototype.team;

