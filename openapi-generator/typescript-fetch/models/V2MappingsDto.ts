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
    V2MappingDto,
    V2MappingDtoFromJSON,
    V2MappingDtoFromJSONTyped,
    V2MappingDtoToJSON,
} from './V2MappingDto';

/**
 * 
 * @export
 * @interface V2MappingsDto
 */
export interface V2MappingsDto {
    /**
     * 
     * @type {Array<V2MappingDto>}
     * @memberof V2MappingsDto
     */
    mappings?: Array<V2MappingDto>;
}

export function V2MappingsDtoFromJSON(json: any): V2MappingsDto {
    return V2MappingsDtoFromJSONTyped(json, false);
}

export function V2MappingsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MappingsDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mappings': !exists(json, 'mappings') ? undefined : ((json['mappings'] as Array<any>).map(V2MappingDtoFromJSON)),
    };
}

export function V2MappingsDtoToJSON(value?: V2MappingsDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mappings': value.mappings === undefined ? undefined : ((value.mappings as Array<any>).map(V2MappingDtoToJSON)),
    };
}

