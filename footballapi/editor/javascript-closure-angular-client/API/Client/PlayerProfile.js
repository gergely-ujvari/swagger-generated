goog.provide('API.Client.PlayerProfile');

/**
 * @record
 */
API.Client.PlayerProfile = function() {}

/**
 * Playing position of the player
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.position;

/**
 * Person's nationality
 * @type {!API.Client.Country}
 * @export
 */
API.Client.PlayerProfile.prototype.country;

/**
 * Date when the person was born
 * @type {!API.Client.date}
 * @export
 */
API.Client.PlayerProfile.prototype.birthdate;

/**
 * Human readable first(given) name
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.firstName;

/**
 * Human readable last(family) name
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.lastName;

/**
 * True if currently active, false if retired
 * @type {!boolean}
 * @export
 */
API.Client.PlayerProfile.prototype.active;

/**
 * Person's gender
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.gender;

/**
 * Unique identifier within the system
 * @type {!number}
 * @export
 */
API.Client.PlayerProfile.prototype.id;

/**
 * Human readable name of the Person
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.name;

/**
 * 150x150 face image of Person
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.urlThumb;

/**
 * 277x338 full body image of Person
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.urlImage;

/**
 * Information about the current league the player is in
 * @type {!API.Client.TournamentSeasonWithTournament}
 * @export
 */
API.Client.PlayerProfile.prototype.currentLeague;

/**
 * Information about the club the Player is currently playing in
 * @type {!API.Client.PlayerTeam}
 * @export
 */
API.Client.PlayerProfile.prototype.club;

/**
 * Information about the national team the Player is currently playing in
 * @type {!API.Client.PlayerTeam}
 * @export
 */
API.Client.PlayerProfile.prototype.nationalTeam;

/**
 * Display name of the player position
 * @type {!string}
 * @export
 */
API.Client.PlayerProfile.prototype.positionDisplay;

/** @enum {string} */
API.Client.PlayerProfile.PositionEnum = { 
  keeper: 'keeper',
  defender: 'defender',
  midfielder: 'midfielder',
  forward: 'forward',
}
/** @enum {string} */
API.Client.PlayerProfile.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
