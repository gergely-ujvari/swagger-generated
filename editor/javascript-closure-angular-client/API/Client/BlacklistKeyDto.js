goog.provide('API.Client.BlacklistKeyDto');

/**
 * @record
 */
API.Client.BlacklistKeyDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.BlacklistKeyDto.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.BlacklistKeyDto.prototype.entity;

/**
 * @type {!string}
 * @export
 */
API.Client.BlacklistKeyDto.prototype.entityId;

/**
 * @type {!string}
 * @export
 */
API.Client.BlacklistKeyDto.prototype.context;

/** @enum {string} */
API.Client.BlacklistKeyDto.TypeEnum = { 
  TRANSLATION: 'TRANSLATION',
  ASSET: 'ASSET',
  RELATION: 'RELATION',
  ENTITY: 'ENTITY',
}
/** @enum {string} */
API.Client.BlacklistKeyDto.EntityEnum = { 
  TEAM: 'TEAM',
  TOURNAMENT: 'TOURNAMENT',
  SEASON: 'SEASON',
  GROUP: 'GROUP',
  STAGE: 'STAGE',
  COUNTRY: 'COUNTRY',
  PLAYER: 'PLAYER',
  COACH: 'COACH',
  LINEUP_PLAYER_TYPE: 'LINEUP_PLAYER_TYPE',
  MATCH_STATUS: 'MATCH_STATUS',
  VENUE: 'VENUE',
  REFEREE: 'REFEREE',
  CITY: 'CITY',
  PRESIDENT: 'PRESIDENT',
  LINEUP: 'LINEUP',
  MATCH: 'MATCH',
  ASSET: 'ASSET',
  STANDING_RULE: 'STANDING_RULE',
  ROUND_TYPE: 'ROUND_TYPE',
}
