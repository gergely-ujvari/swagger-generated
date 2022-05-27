goog.provide('API.Client.Tournament');

/**
 * Resource representing a Football Tournament such as A Grupa, Premier League, Champions League, World Cup, etc. Does not represent a specific season such as Premier League 2015/2016.
 * @record
 */
API.Client.Tournament = function() {}

/**
 * Unique Resource identifier of the Tournament
 * @type {!number}
 * @export
 */
API.Client.Tournament.prototype.id;

/**
 * Human readable name of the Tournament
 * @type {!string}
 * @export
 */
API.Client.Tournament.prototype.name;

/**
 * Country where the Tournament is held
 * @type {!API.Client.Country}
 * @export
 */
API.Client.Tournament.prototype.country;

/**
 * Whether or not the Tournament is a regional league such as the La Liga, A PFG, EPL.
 * @type {!boolean}
 * @export
 */
API.Client.Tournament.prototype.regionalLeague;

/**
 * Represents the order position in a custom client based sorted list
 * @type {!number}
 * @export
 */
API.Client.Tournament.prototype.clientSortorder;

/**
 * @type {!string}
 * @export
 */
API.Client.Tournament.prototype.urlLogo;

/**
 * Shows if the tournament is Cup or a League
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Tournament.prototype.type;

/**
 * Shows if the the teams in the tournament are Male or Female
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Tournament.prototype.gender;

/**
 * Shows if the tournament is Regional or International
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Tournament.prototype.region;

