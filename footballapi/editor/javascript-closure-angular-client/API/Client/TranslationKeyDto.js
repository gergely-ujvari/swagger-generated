goog.provide('API.Client.TranslationKeyDto');

/**
 * @record
 */
API.Client.TranslationKeyDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.TranslationKeyDto.prototype.entity;

/**
 * @type {!string}
 * @export
 */
API.Client.TranslationKeyDto.prototype.entityId;

/**
 * @type {!string}
 * @export
 */
API.Client.TranslationKeyDto.prototype.language;

/** @enum {string} */
API.Client.TranslationKeyDto.EntityEnum = { 
  LINEUP_PLAYER_TYPE: 'LINEUP_PLAYER_TYPE',
  COACH: 'COACH',
  VENUE: 'VENUE',
  TOURNAMENT: 'TOURNAMENT',
  TEAM: 'TEAM',
  COUNTRY: 'COUNTRY',
  MATCH_STATUS: 'MATCH_STATUS',
  STAGE: 'STAGE',
  PLAYER: 'PLAYER',
  REFEREE: 'REFEREE',
  CITY: 'CITY',
  PRESIDENT: 'PRESIDENT',
  STANDING_RULE: 'STANDING_RULE',
  GROUP: 'GROUP',
  SEASON: 'SEASON',
  ROUND_TYPE: 'ROUND_TYPE',
}
