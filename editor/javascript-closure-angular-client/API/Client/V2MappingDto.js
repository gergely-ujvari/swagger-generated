goog.provide('API.Client.v2_MappingDto');

/**
 * @record
 */
API.Client.V2MappingDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingDto.prototype.provider;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingDto.prototype.entityType;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingDto.prototype.domainId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingDto.prototype.providerId;

/** @enum {string} */
API.Client.V2MappingDto.EntityTypeEnum = { 
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
