goog.provide('API.Client.v2_StageDetails');

/**
 * @record
 */
API.Client.V2StageDetails = function() {}

/**
 * @type {!API.Client.v2_MatchStage}
 * @export
 */
API.Client.V2StageDetails.prototype.stage;

/**
 * @type {!Array<!API.Client.v2_RoundWithStatus>}
 * @export
 */
API.Client.V2StageDetails.prototype.rounds;

