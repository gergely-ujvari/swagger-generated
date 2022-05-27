goog.provide('API.Client.v2_MatchTeamDto');

/**
 * @record
 */
API.Client.V2MatchTeamDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.threeLetterCode;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.gender;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.shortName;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchTeamDto.prototype.shirtColor;

/** @enum {string} */
API.Client.V2MatchTeamDto.TypeEnum = { 
  PLACEHOLDER: 'PLACEHOLDER',
  NATIONAL: 'NATIONAL',
  CLUB: 'CLUB',
}
