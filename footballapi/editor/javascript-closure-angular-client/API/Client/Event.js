goog.provide('API.Client.Event');

/**
 * @record
 */
API.Client.Event = function() {}

/**
 * Number of spectators at the event
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.spectators;

/**
 * TournamentSeasonStage in which the Event is part of. Should be used for Standing unless the Event is part of a StageGroup
 * @type {!API.Client.PartialTournamentSeasonStage}
 * @export
 */
API.Client.Event.prototype.tournamentSeasonStage;

/**
 * Live minute ticker. Only available if the event_status.type is 'inprogress'
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.minute;

/**
 * Describes the group in which the Event is part of. Available if the Event is from a TournamentSeasonStage which has groups. Example: Champions League Group Stage -> Group A
 * @type {!API.Client.StageGroup}
 * @export
 */
API.Client.Event.prototype.stageGroup;

/**
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.Event.prototype.referee;

/**
 * @type {!API.Client.Venue}
 * @export
 */
API.Client.Event.prototype.venue;

/**
 * Number of incidents which have occured in the Event (goals, red cards, yellow cards, etc).
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.incidents;

/**
 * Indicates whether player lineup information is available or not
 * @type {!boolean}
 * @export
 */
API.Client.Event.prototype.lineupAvailable;

/**
 * Indicates whether the event has livescore updates. If false the event will be updated after FT.
 * @type {!boolean}
 * @export
 */
API.Client.Event.prototype.liveUpdates;

/**
 * Indicates whether teamstats are available for this event
 * @type {!boolean}
 * @export
 */
API.Client.Event.prototype.teamstatsAvailable;

/**
 * Score information at various stages of the Event for Home Team
 * @type {!API.Client.TeamScore}
 * @export
 */
API.Client.Event.prototype.homeScore;

/**
 * Score information at various stages of the Event for Home Team
 * @type {!API.Client.TeamScore}
 * @export
 */
API.Client.Event.prototype.awayScore;

/**
 * timestamp when the current phase (1st_half, 2nd_half, et, etc) has started. Can be used for calculating the minute ticker
 * @type {!Date}
 * @export
 */
API.Client.Event.prototype.startedAt;

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.id;

/**
 * Description of the event's current status
 * @type {!API.Client.EventStatus}
 * @export
 */
API.Client.Event.prototype.eventStatus;

/**
 * Timestamp when the event is scheduled to start
 * @type {!Date}
 * @export
 */
API.Client.Event.prototype.startTime;

/**
 * Goals scored by the home team
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.goalHome;

/**
 * Goals scored by the away team
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.goalAway;

/**
 * Penalties scored by the home team. Available only if the game goes to penalty shootouts
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.penaltyHome;

/**
 * Penalties scored by the away team. Available only if the game goes to penalty shootouts
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.penaltyAway;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.aggHome;

/**
 * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
 * @type {!number}
 * @export
 */
API.Client.Event.prototype.aggAway;

/**
 * Home Team
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.Event.prototype.homeTeam;

/**
 * Away Team
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.Event.prototype.awayTeam;

