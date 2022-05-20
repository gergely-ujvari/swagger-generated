goog.provide('API.Client.PartialPerson');

/**
 * @record
 */
API.Client.PartialPerson = function() {}

/**
 * Unique identifier within the system
 * @type {!number}
 * @export
 */
API.Client.PartialPerson.prototype.id;

/**
 * Human readable name of the Person
 * @type {!string}
 * @export
 */
API.Client.PartialPerson.prototype.name;

/**
 * 150x150 face image of Person
 * @type {!string}
 * @export
 */
API.Client.PartialPerson.prototype.urlThumb;

/**
 * 277x338 full body image of Person
 * @type {!string}
 * @export
 */
API.Client.PartialPerson.prototype.urlImage;

