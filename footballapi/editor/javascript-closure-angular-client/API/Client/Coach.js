goog.provide('API.Client.Coach');

/**
 * @record
 */
API.Client.Coach = function() {}

/**
 * 277x338 full body image of Person
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.urlImage;

/**
 * Person's nationality
 * @type {!API.Client.Country}
 * @export
 */
API.Client.Coach.prototype.country;

/**
 * Date when the person was born
 * @type {!API.Client.date}
 * @export
 */
API.Client.Coach.prototype.birthdate;

/**
 * Human readable first(given) name
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.firstName;

/**
 * Human readable last(family) name
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.lastName;

/**
 * True if currently active, false if retired
 * @type {!boolean}
 * @export
 */
API.Client.Coach.prototype.active;

/**
 * Person's gender
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.gender;

/**
 * Unique identifier within the system
 * @type {!number}
 * @export
 */
API.Client.Coach.prototype.id;

/**
 * Human readable name of the Person
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.name;

/**
 * 150x150 face image of Person
 * @type {!string}
 * @export
 */
API.Client.Coach.prototype.urlThumb;

/** @enum {string} */
API.Client.Coach.GenderEnum = { 
  MALE: 'MALE',
  FEMALE: 'FEMALE',
}
