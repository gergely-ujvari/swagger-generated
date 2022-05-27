goog.provide('API.Client.LiveCommentaryOutputDto');

/**
 * @record
 */
API.Client.LiveCommentaryOutputDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.type;

/**
 * @type {!string}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.templateText;

/**
 * @type {!string}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.autoText;

/**
 * @type {!number}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.elapsed;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.details;

/**
 * @type {!Date}
 * @export
 */
API.Client.LiveCommentaryOutputDto.prototype.incidentTimestamp;

