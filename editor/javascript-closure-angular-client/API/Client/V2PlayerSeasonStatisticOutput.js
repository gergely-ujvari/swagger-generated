goog.provide('API.Client.v2_PlayerSeasonStatisticOutput');

/**
 * @record
 */
API.Client.V2PlayerSeasonStatisticOutput = function() {}

/**
 * @type {!API.Client.v2_Player}
 * @export
 */
API.Client.V2PlayerSeasonStatisticOutput.prototype.player;

/**
 * @type {!Array<!API.Client.v2_Team>}
 * @export
 */
API.Client.V2PlayerSeasonStatisticOutput.prototype.teams;

/**
 * @type {!API.Client.v2_Season}
 * @export
 */
API.Client.V2PlayerSeasonStatisticOutput.prototype.season;

/**
 * @type {!Array<!API.Client.v2_StatisticItem>}
 * @export
 */
API.Client.V2PlayerSeasonStatisticOutput.prototype.statistics;

