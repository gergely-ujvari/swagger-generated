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
    CoachDto,
    CoachDtoFromJSON,
    CoachDtoFromJSONTyped,
    CoachDtoToJSON,
} from './CoachDto';
import {
    PageMetaDto,
    PageMetaDtoFromJSON,
    PageMetaDtoFromJSONTyped,
    PageMetaDtoToJSON,
} from './PageMetaDto';

/**
 * 
 * @export
 * @interface CoachPageDto
 */
export interface CoachPageDto {
    /**
     * 
     * @type {Array<CoachDto>}
     * @memberof CoachPageDto
     */
    coaches?: Array<CoachDto>;
    /**
     * 
     * @type {PageMetaDto}
     * @memberof CoachPageDto
     */
    pageMeta?: PageMetaDto;
}

export function CoachPageDtoFromJSON(json: any): CoachPageDto {
    return CoachPageDtoFromJSONTyped(json, false);
}

export function CoachPageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoachPageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coaches': !exists(json, 'coaches') ? undefined : ((json['coaches'] as Array<any>).map(CoachDtoFromJSON)),
        'pageMeta': !exists(json, 'page_meta') ? undefined : PageMetaDtoFromJSON(json['page_meta']),
    };
}

export function CoachPageDtoToJSON(value?: CoachPageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coaches': value.coaches === undefined ? undefined : ((value.coaches as Array<any>).map(CoachDtoToJSON)),
        'page_meta': PageMetaDtoToJSON(value.pageMeta),
    };
}
