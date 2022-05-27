goog.provide('API.Client.Player');

/**
 * @record
 */
API.Client.Player = function() {}

/**
 * Playing position of the player
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.position;

/**
 * Person's nationality
 * @type {!API.Client.Country}
 * @export
 */
API.Client.Player.prototype.country;

/**
 * Date when the person was born
 * @type {!API.Client.date}
 * @export
 */
API.Client.Player.prototype.birthdate;

/**
 * Human readable first(given) name
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.firstName;

/**
 * Human readable last(family) name
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.lastName;

/**
 * True if currently active, false if retired
 * @type {!boolean}
 * @export
 */
API.Client.Player.prototype.active;

/**
 * Person's gender
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.gender;

/**
 * Unique identifier within the system
 * @type {!number}
 * @export
 */
API.Client.Player.prototype.id;

/**
 * Human readable name of the Person
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.name;

/**
 * 150x150 face image of Person
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.urlThumb;

/**
 * 277x338 full body image of Person
 * @type {!string}
 * @export
 */
API.Client.Player.prototype.urlImage;

/** @enum {string} */
API.Client.Player.PositionEnum = { 
  keeper: 'keeper',
  defender: 'defender',
  midfielder: 'midfielder',
  forward: 'forward',
}
/** @enum {string} */
API.Client.Player.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
