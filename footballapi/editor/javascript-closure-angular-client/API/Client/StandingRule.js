goog.provide('API.Client.StandingRule');

/**
 * @record
 */
API.Client.StandingRule = function() {}

/**
 * Human readable name describing the standing rule
 * @type {!string}
 * @export
 */
API.Client.StandingRule.prototype.name;

/**
 * Unique code identifying the standing rule
 * @type {!string}
 * @export
 */
API.Client.StandingRule.prototype.code;

/**
 * Type classification of the standing rule
 * @type {!string}
 * @export
 */
API.Client.StandingRule.prototype.type;

/**
 * Detailed description of the standing rule
 * @type {!string}
 * @export
 */
API.Client.StandingRule.prototype.description;

/**
 * @type {!number}
 * @export
 */
API.Client.StandingRule.prototype.id;

/** @enum {string} */
API.Client.StandingRule.TypeEnum = { 
  promotion: 'promotion',
  promotion_playoff: 'promotion_playoff',
  relegation: 'relegation',
  relegation_playoff: 'relegation_playoff',
  tiertwo: 'tiertwo',
  tiertwo_playoff: 'tiertwo_playoff',
}
