goog.provide('API.Client.v2_MappingRequestsDto');

/**
 * @record
 */
API.Client.V2MappingRequestsDto = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.V2MappingRequestsDto.prototype.provider;

/**
 * @type {!Array<!API.Client.v2_MappingRequestDto>}
 * @export
 */
API.Client.V2MappingRequestsDto.prototype.mappingRequests;

