goog.provide('API.Client.v2_SeasonStage');

/**
 * @record
 */
API.Client.V2SeasonStage = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2SeasonStage.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SeasonStage.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SeasonStage.prototype.type;

/**
 * @type {!API.Client.date}
 * @export
 */
API.Client.V2SeasonStage.prototype.startDate;

/**
 * @type {!API.Client.date}
 * @export
 */
API.Client.V2SeasonStage.prototype.endDate;

/**
 * @type {!number}
 * @export
 */
API.Client.V2SeasonStage.prototype.orderInSeason;

/**
 * @type {!string}
 * @export
 */
API.Client.V2SeasonStage.prototype.coverage;

/** @enum {string} */
API.Client.V2SeasonStage.TypeEnum = { 
  GROUP: 'GROUP',
  LEAGUE: 'LEAGUE',
  KNOCK_OUT: 'KNOCK_OUT',
}
