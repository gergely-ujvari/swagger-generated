goog.provide('API.Client.StageGroup');

/**
 * @record
 */
API.Client.StageGroup = function() {}

/**
 * Unique resource identifier
 * @type {!number}
 * @export
 */
API.Client.StageGroup.prototype.id;

/**
 * Human readable name of the Group
 * @type {!string}
 * @export
 */
API.Client.StageGroup.prototype.name;

/**
 * The order in the stage of the group
 * @type {!number}
 * @export
 */
API.Client.StageGroup.prototype.orderInStage;

