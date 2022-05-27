goog.provide('API.Client.v2_PlayerActiveClub');

/**
 * @record
 */
API.Client.V2PlayerActiveClub = function() {}

/**
 * @type {!API.Client.v2_Team}
 * @export
 */
API.Client.V2PlayerActiveClub.prototype.team;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerActiveClub.prototype.contractType;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerActiveClub.prototype.startDate;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerActiveClub.prototype.shirtNumber;

/**
 * @type {!string}
 * @export
 */
API.Client.V2PlayerActiveClub.prototype.status;

/** @enum {string} */
API.Client.V2PlayerActiveClub.StatusEnum = { 
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
}
