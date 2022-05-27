goog.provide('API.Client.PartialEvent');

/**
 * @record
 */
API.Client.PartialEvent = function() {}

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.id;

/**
 * Description of the event's current status
 * @type {!API.Client.EventStatus}
 * @export
 */
API.Client.PartialEvent.prototype.eventStatus;

/**
 * Timestamp when the event is scheduled to start
 * @type {!Date}
 * @export
 */
API.Client.PartialEvent.prototype.startTime;

/**
 * Goals scored by the home team
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.goalHome;

/**
 * Goals scored by the away team
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.goalAway;

/**
 * Penalties scored by the home team. Available only if the game goes to penalty shootouts
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.penaltyHome;

/**
 * Penalties scored by the away team. Available only if the game goes to penalty shootouts
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.penaltyAway;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.aggHome;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @type {!number}
 * @export
 */
API.Client.PartialEvent.prototype.aggAway;

/**
 * Home Team
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.PartialEvent.prototype.homeTeam;

/**
 * Away Team
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.PartialEvent.prototype.awayTeam;

