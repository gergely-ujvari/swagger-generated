goog.provide('API.Client.CardlistStandingData');

/**
 * @record
 */
API.Client.CardlistStandingData = function() {}

/**
 * Position of the team/player in the standing
 * @type {!number}
 * @export
 */
API.Client.CardlistStandingData.prototype.rank;

/**
 * Reference to the team in the Standing (for league) or the Team for which the Player competes (topscorer, cardlist)
 * @type {!API.Client.PartialTeam}
 * @export
 */
API.Client.CardlistStandingData.prototype.team;

/**
 * List of applicable rules to the current standing rank
 * @type {!Array<!API.Client.StandingRule>}
 * @export
 */
API.Client.CardlistStandingData.prototype.rules;

/**
 * Information about the Player
 * @type {!API.Client.PartialPerson}
 * @export
 */
API.Client.CardlistStandingData.prototype.player;

/**
 * Number of red cards
 * @type {!number}
 * @export
 */
API.Client.CardlistStandingData.prototype.redCards;

/**
 * Total number of cards received
 * @type {!number}
 * @export
 */
API.Client.CardlistStandingData.prototype.totalCards;

/**
 * Total number of yellow cards
 * @type {!number}
 * @export
 */
API.Client.CardlistStandingData.prototype.yellowCards;

/**
 * Number of times the Player has been booked, with a first yellow card
 * @type {!number}
 * @export
 */
API.Client.CardlistStandingData.prototype.firstYellowCards;

