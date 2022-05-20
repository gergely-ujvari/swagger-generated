goog.provide('API.Client.v2_KnockoutGroup');

/**
 * @record
 */
API.Client.V2KnockoutGroup = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2KnockoutGroup.prototype.id;

/**
 * @type {!number}
 * @export
 */
API.Client.V2KnockoutGroup.prototype.order;

/**
 * @type {!Array<!API.Client.v2_KnockoutTeam>}
 * @export
 */
API.Client.V2KnockoutGroup.prototype.teams;

/**
 * @type {!Array<!API.Client.v2_KnockoutMatch>}
 * @export
 */
API.Client.V2KnockoutGroup.prototype.matches;

/**
 * @type {!string}
 * @export
 */
API.Client.V2KnockoutGroup.prototype.childObjectId;

