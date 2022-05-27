goog.provide('API.Client.StageGroupWithStanding');

/**
 * @record
 */
API.Client.StageGroupWithStanding = function() {}

/**
 * Unique resource identifier
 * @type {!number}
 * @export
 */
API.Client.StageGroupWithStanding.prototype.id;

/**
 * Human readable name of the Group
 * @type {!string}
 * @export
 */
API.Client.StageGroupWithStanding.prototype.name;

/**
 * The order in the stage of the group
 * @type {!number}
 * @export
 */
API.Client.StageGroupWithStanding.prototype.orderInStage;

/**
 * League Standing for the StageGroup if available and requested
 * @type {!Array<!API.Client.LeagueStandingData>}
 * @export
 */
API.Client.StageGroupWithStanding.prototype.standing;

