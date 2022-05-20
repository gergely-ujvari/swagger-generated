goog.provide('API.Client.v2_SquadPlayerInput');

/**
 * @record
 */
API.Client.V2SquadPlayerInput = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.playerId;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.status;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.contractType;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.startDate;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.endDate;

/**
 * @type {!number}
 * @export
 */
API.Client.V2SquadPlayerInput.prototype.shirtNumber;

/** @enum {string} */
API.Client.V2SquadPlayerInput.StatusEnum = { 
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
}
/** @enum {string} */
API.Client.V2SquadPlayerInput.ContractTypeEnum = { 
  PERMANENT: 'PERMANENT',
  LOAN: 'LOAN',
  UNKNOWN: 'UNKNOWN',
}
