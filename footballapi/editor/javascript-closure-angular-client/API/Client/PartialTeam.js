goog.provide('API.Client.PartialTeam');

/**
 * @record
 */
API.Client.PartialTeam = function() {}

/**
 * Whether the team is a football club(Barcelona) or national team(Spain)
 * @type {!boolean}
 * @export
 */
API.Client.PartialTeam.prototype.national;

/**
 * Unique identifier of the Team within the system
 * @type {!number}
 * @export
 */
API.Client.PartialTeam.prototype.id;

/**
 * Human readable name of the team
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.name;

/**
 * 3 character name of team
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.threeLetterCode;

/**
 * Manually inserted short name of team
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.shortName;

/**
 * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
 * @type {!boolean}
 * @export
 */
API.Client.PartialTeam.prototype.undecided;

/**
 * Team gender, MALE, FEMALE or null
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.gender;

/**
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.urlLogo;

/**
 * @type {!string}
 * @export
 */
API.Client.PartialTeam.prototype.type;

/** @enum {string} */
API.Client.PartialTeam.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
/** @enum {string} */
API.Client.PartialTeam.TypeEnum = { 
  placeholder: 'placeholder',
  club: 'club',
  national: 'national',
}
