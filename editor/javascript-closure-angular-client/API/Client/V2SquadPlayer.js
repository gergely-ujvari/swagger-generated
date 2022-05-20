goog.provide('API.Client.v2_SquadPlayer');

/**
 * @record
 */
API.Client.V2SquadPlayer = function() {}

/**
 * @type {!API.Client.v2_Player}
 * @export
 */
API.Client.V2SquadPlayer.prototype.player;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayer.prototype.status;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayer.prototype.contractType;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayer.prototype.startDate;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SquadPlayer.prototype.endDate;

/**
 * @type {!number}
 * @export
 */
API.Client.V2SquadPlayer.prototype.shirtNumber;

/** @enum {string} */
API.Client.V2SquadPlayer.StatusEnum = { 
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
}
/** @enum {string} */
API.Client.V2SquadPlayer.ContractTypeEnum = { 
  PERMANENT: 'PERMANENT',
  LOAN: 'LOAN',
  UNKNOWN: 'UNKNOWN',
}
