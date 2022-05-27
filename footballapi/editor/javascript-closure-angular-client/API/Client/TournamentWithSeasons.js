goog.provide('API.Client.TournamentWithSeasons');

/**
 * @record
 */
API.Client.TournamentWithSeasons = function() {}

/**
 * Unique Resource identifier of the Tournament
 * @type {!number}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.id;

/**
 * Human readable name of the Tournament
 * @type {!string}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.name;

/**
 * Country where the Tournament is held
 * @type {!API.Client.Country}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.country;

/**
 * Whether or not the Tournament is a regional league such as the La Liga, A PFG, EPL.
 * @type {!boolean}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.regionalLeague;

/**
 * Represents the order position in a custom client based sorted list
 * @type {!number}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.clientSortorder;

/**
 * @type {!string}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.urlLogo;

/**
 * Shows if the tournament is Cup or a League
 * @type {!API.Client.Object}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.type;

/**
 * Shows if the the teams in the tournament are Male or Female
 * @type {!API.Client.Object}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.gender;

/**
 * Shows if the tournament is Regional or International
 * @type {!API.Client.Object}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.region;

/**
 * List of seasons available for the Tournament
 * @type {!Array<!API.Client.TournamentSeason>}
 * @export
 */
API.Client.TournamentWithSeasons.prototype.seasons;

