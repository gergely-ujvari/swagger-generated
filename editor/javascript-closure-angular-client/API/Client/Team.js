goog.provide('API.Client.Team');

/**
 * @record
 */
API.Client.Team = function() {}

/**
 * Reference to the Country where the team is based.
 * @type {!API.Client.Country}
 * @export
 */
API.Client.Team.prototype.country;

/**
 * Name of the president of the club
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.president;

/**
 * Year the club was founded
 * @type {!number}
 * @export
 */
API.Client.Team.prototype.founded;

/**
 * @type {!API.Client.Venue}
 * @export
 */
API.Client.Team.prototype.venue;

/**
 * @type {!API.Client.Coach}
 * @export
 */
API.Client.Team.prototype.coach;

/**
 * Information about the League the team currently participates in
 * @type {!API.Client.TournamentSeasonWithTournament}
 * @export
 */
API.Client.Team.prototype.currentLeague;

/**
 * The next event the team is playing in
 * @type {!API.Client.Event}
 * @export
 */
API.Client.Team.prototype.nextEvent;

/**
 * Various social links for the team
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Team.prototype.social;

/**
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.urlHomeKit;

/**
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.urlAwayKit;

/**
 * Image of the team squad
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.urlSquadImage;

/**
 * Whether the team is a football club(Barcelona) or national team(Spain)
 * @type {!boolean}
 * @export
 */
API.Client.Team.prototype.national;

/**
 * Unique identifier of the Team within the system
 * @type {!number}
 * @export
 */
API.Client.Team.prototype.id;

/**
 * Human readable name of the team
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.name;

/**
 * 3 character name of team
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.threeLetterCode;

/**
 * Manually inserted short name of team
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.shortName;

/**
 * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
 * @type {!boolean}
 * @export
 */
API.Client.Team.prototype.undecided;

/**
 * Team gender, MALE, FEMALE or null
 * @type {!string}
 * @export
 */
API.Client.Team.prototype.gender;

/**
 * Form guide for the Team if available and requested as an option
 * @type {!Array<!API.Client.TeamForm>}
 * @export
 */
API.Client.Team.prototype.form;

/** @enum {string} */
API.Client.Team.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
