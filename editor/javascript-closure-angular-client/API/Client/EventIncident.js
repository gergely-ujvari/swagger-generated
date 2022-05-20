goog.provide('API.Client.EventIncident');

/**
 * @record
 */
API.Client.EventIncident = function() {}

/**
 * Unique identifier
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.id;

/**
 * Identifier of the event during which the incident occurred
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.eventId;

/**
 * The type of incident
 * @type {!string}
 * @export
 */
API.Client.EventIncident.prototype.type;

/**
 * Whether the incident is related to the home or away team. true if home team
 * @type {!boolean}
 * @export
 */
API.Client.EventIncident.prototype.homeTeam;

/**
 * The minute when the incident occured
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.minute;

/**
 * Id of the team for which the incident is related
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.teamId;

/**
 * Updated home team score if the incident changes the scoreline (penalty, goal, own_goal, etc)
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.goalHome;

/**
 * Updated away team score  if the incident changes the scoreline (penalty, goal, own_goal, etc)
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.goalAway;

/**
 * Player who is the main actor in the incident: Goal Scorer, player who received yellow card. If type == 'substitution' this is the player coming off
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.EventIncident.prototype.player;

/**
 * Player who is of secondary importance to the incident: Player who assisted a goal. If type == 'substitution' this is the player coming on
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.EventIncident.prototype.relPlayer;

/**
 * Whether the incident has been deleted or not - a disallowed goal for example
 * @type {!boolean}
 * @export
 */
API.Client.EventIncident.prototype.deleted;

/**
 * If there are multiple incidents with the same minute, this indicates how they are sorted
 * @type {!number}
 * @export
 */
API.Client.EventIncident.prototype.sortorder;

/** @enum {string} */
API.Client.EventIncident.TypeEnum = { 
  penalty_shootout_scored: 'penalty_shootout_scored',
  yellow_card_red: 'yellow_card_red',
  penalty_shootout_missed: 'penalty_shootout_missed',
  substitution: 'substitution',
  goal: 'goal',
  red_card: 'red_card',
  penalty_miss: 'penalty_miss',
  yellow_card: 'yellow_card',
  penalty_goal: 'penalty_goal',
  own_goal: 'own_goal',
}
