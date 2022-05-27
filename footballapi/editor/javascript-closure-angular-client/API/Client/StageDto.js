goog.provide('API.Client.StageDto');

/**
 * @record
 */
API.Client.StageDto = function() {}

/**
 * @type {!number}
 * @export
 */
API.Client.StageDto.prototype.id;

/**
 * @type {!string}
 * @export
 */
API.Client.StageDto.prototype.name;

/**
 * @type {!boolean}
 * @export
 */
API.Client.StageDto.prototype.cup;

/**
 * @type {!API.Client.SeasonDto}
 * @export
 */
API.Client.StageDto.prototype.season;

/**
 * @type {!API.Client.TournamentDto}
 * @export
 */
API.Client.StageDto.prototype.tournament;

/**
 * @type {!string}
 * @export
 */
API.Client.StageDto.prototype.startDate;

/**
 * @type {!string}
 * @export
 */
API.Client.StageDto.prototype.endDate;

/**
 * @type {!boolean}
 * @export
 */
API.Client.StageDto.prototype.live;

/**
 * @type {!number}
 * @export
 */
API.Client.StageDto.prototype.stageGroups;

