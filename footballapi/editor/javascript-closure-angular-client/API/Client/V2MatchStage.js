goog.provide('API.Client.v2_MatchStage');

/**
 * @record
 */
API.Client.V2MatchStage = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStage.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStage.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStage.prototype.type;

/**
 * @type {!API.Client.date}
 * @export
 */
API.Client.V2MatchStage.prototype.startDate;

/**
 * @type {!API.Client.date}
 * @export
 */
API.Client.V2MatchStage.prototype.endDate;

/**
 * @type {!number}
 * @export
 */
API.Client.V2MatchStage.prototype.orderInSeason;

/**
 * @type {!string}
 * @export
 */
API.Client.V2MatchStage.prototype.coverage;

/**
 * Available only for /v2/seasons/{id}/stages
 * @type {!string}
 * @export
 */
API.Client.V2MatchStage.prototype.status;

/** @enum {string} */
API.Client.V2MatchStage.TypeEnum = { 
  GROUP: 'GROUP',
  LEAGUE: 'LEAGUE',
  KNOCK_OUT: 'KNOCK_OUT',
}
/** @enum {string} */
API.Client.V2MatchStage.StatusEnum = { 
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
}
