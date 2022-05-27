goog.provide('API.Client.TeamForm');

/**
 * @record
 */
API.Client.TeamForm = function() {}

/**
 * Information about the Event in the Form guide
 * @type {!API.Client.PartialEvent}
 * @export
 */
API.Client.TeamForm.prototype.event;

/**
 * Indicates outcome of the event for the given team
 * @type {!string}
 * @export
 */
API.Client.TeamForm.prototype.outcome;

/** @enum {string} */
API.Client.TeamForm.OutcomeEnum = { 
  W: 'W',
  D: 'D',
  L: 'L',
}
