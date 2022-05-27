goog.provide('API.Client.v2_KnockoutScheme');

/**
 * @record
 */
API.Client.V2KnockoutScheme = function() {}

/**
 * @type {!API.Client.v2_KnockoutEdgeRound}
 * @export
 */
API.Client.V2KnockoutScheme.prototype.startRound;

/**
 * @type {!API.Client.v2_KnockoutEdgeRound}
 * @export
 */
API.Client.V2KnockoutScheme.prototype.endRound;

/**
 * @type {!boolean}
 * @export
 */
API.Client.V2KnockoutScheme.prototype.smallFinal;

/**
 * @type {!API.Client.v2_MatchStage}
 * @export
 */
API.Client.V2KnockoutScheme.prototype.stage;

/**
 * @type {!Array<!API.Client.v2_KnockoutRound>}
 * @export
 */
API.Client.V2KnockoutScheme.prototype.rounds;

