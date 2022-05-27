goog.provide('API.Client.v2_MappingRequestDto');

/**
 * @record
 */
API.Client.V2MappingRequestDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingRequestDto.prototype.entityType;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingRequestDto.prototype.providerId;

/** @enum {string} */
API.Client.V2MappingRequestDto.EntityTypeEnum = { 
  PLAYER: 'PLAYER',
  TEAM: 'TEAM',
  COACH: 'COACH',
  MATCH: 'MATCH',
  SEASON: 'SEASON',
  VENUE: 'VENUE',
  REFEREE: 'REFEREE',
  TOURNAMENT: 'TOURNAMENT',
  CITY: 'CITY',
  PRESIDENT: 'PRESIDENT',
  STAGE: 'STAGE',
  GROUP: 'GROUP',
  COUNTRY: 'COUNTRY',
  ODD_PROVIDER: 'ODD_PROVIDER',
}
