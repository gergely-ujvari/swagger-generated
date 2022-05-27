/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V2MappingRequestDto,
    V2MappingRequestDtoFromJSON,
    V2MappingRequestDtoFromJSONTyped,
    V2MappingRequestDtoToJSON,
} from './V2MappingRequestDto';

/**
 * 
 * @export
 * @interface V2MappingsSearchPostRequest
 */
export interface V2MappingsSearchPostRequest {
    /**
     * Data entity provider name
     * @type {string}
     * @memberof V2MappingsSearchPostRequest
     */
    provider: string;
    /**
     * Mapping requests
     * @type {Array<V2MappingRequestDto>}
     * @memberof V2MappingsSearchPostRequest
     */
    mappingRequests: Array<V2MappingRequestDto>;
}

export function V2MappingsSearchPostRequestFromJSON(json: any): V2MappingsSearchPostRequest {
    return V2MappingsSearchPostRequestFromJSONTyped(json, false);
}

export function V2MappingsSearchPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MappingsSearchPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'provider': json['provider'],
        'mappingRequests': ((json['mapping_requests'] as Array<any>).map(V2MappingRequestDtoFromJSON)),
    };
}

export function V2MappingsSearchPostRequestToJSON(value?: V2MappingsSearchPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'provider': value.provider,
        'mapping_requests': ((value.mappingRequests as Array<any>).map(V2MappingRequestDtoToJSON)),
    };
}

