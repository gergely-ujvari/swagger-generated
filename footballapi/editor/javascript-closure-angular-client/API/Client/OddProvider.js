goog.provide('API.Client.OddProvider');

/**
 * @record
 */
API.Client.OddProvider = function() {}

/**
 * Resource identifier
 * @type {!number}
 * @export
 */
API.Client.OddProvider.prototype.id;

/**
 * Human readable name of the OddProvider
 * @type {!string}
 * @export
 */
API.Client.OddProvider.prototype.name;

/**
 * Homepage of the OddProvider
 * @type {!string}
 * @export
 */
API.Client.OddProvider.prototype.url;

/**
 * Counrty where the OddProvider is based
 * @type {!API.Client.Country}
 * @export
 */
API.Client.OddProvider.prototype.country;

/**
 * @type {!string}
 * @export
 */
API.Client.OddProvider.prototype.urlLogo;

