goog.provide('API.Client.PartialTeamWithForm');

/**
 * @record
 */
API.Client.PartialTeamWithForm = function() {}

/**
 * Whether the team is a football club(Barcelona) or national team(Spain)
 * @type {!boolean}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.national;

/**
 * Unique identifier of the Team within the system
 * @type {!number}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.id;

/**
 * Human readable name of the team
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.name;

/**
 * 3 character name of team
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.threeLetterCode;

/**
 * Manually inserted short name of team
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.shortName;

/**
 * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
 * @type {!boolean}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.undecided;

/**
 * Team gender, MALE, FEMALE or null
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.gender;

/**
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.urlLogo;

/**
 * @type {!string}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.type;

/**
 * Form guide for the Team if available and requested as an option
 * @type {!Array<!API.Client.TeamForm>}
 * @export
 */
API.Client.PartialTeamWithForm.prototype.form;

/** @enum {string} */
API.Client.PartialTeamWithForm.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
/** @enum {string} */
API.Client.PartialTeamWithForm.TypeEnum = { 
  placeholder: 'placeholder',
  club: 'club',
  national: 'national',
}
