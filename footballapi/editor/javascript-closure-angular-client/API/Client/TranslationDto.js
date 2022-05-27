goog.provide('API.Client.TranslationDto');

/**
 * @record
 */
API.Client.TranslationDto = function() {}

/**
 * @type {!API.Client.TranslationKeyDto}
 * @export
 */
API.Client.TranslationDto.prototype.key;

/**
 * @type {!API.Client.TranslationContentDto}
 * @export
 */
API.Client.TranslationDto.prototype.content;

