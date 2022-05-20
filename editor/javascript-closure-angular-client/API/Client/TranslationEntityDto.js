goog.provide('API.Client.TranslationEntityDto');

/**
 * @record
 */
API.Client.TranslationEntityDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.TranslationEntityDto.prototype.entity;

/** @enum {string} */
API.Client.TranslationEntityDto.EntityEnum = { 
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
