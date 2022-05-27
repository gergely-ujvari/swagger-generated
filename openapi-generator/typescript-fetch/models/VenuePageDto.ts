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
    PageMetaDto,
    PageMetaDtoFromJSON,
    PageMetaDtoFromJSONTyped,
    PageMetaDtoToJSON,
} from './PageMetaDto';
import {
    VenueDto,
    VenueDtoFromJSON,
    VenueDtoFromJSONTyped,
    VenueDtoToJSON,
} from './VenueDto';

/**
 * 
 * @export
 * @interface VenuePageDto
 */
export interface VenuePageDto {
    /**
     * 
     * @type {Array<VenueDto>}
     * @memberof VenuePageDto
     */
    venues?: Array<VenueDto>;
    /**
     * 
     * @type {PageMetaDto}
     * @memberof VenuePageDto
     */
    pageMeta?: PageMetaDto;
}

export function VenuePageDtoFromJSON(json: any): VenuePageDto {
    return VenuePageDtoFromJSONTyped(json, false);
}

export function VenuePageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenuePageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'venues': !exists(json, 'venues') ? undefined : ((json['venues'] as Array<any>).map(VenueDtoFromJSON)),
        'pageMeta': !exists(json, 'page_meta') ? undefined : PageMetaDtoFromJSON(json['page_meta']),
    };
}

export function VenuePageDtoToJSON(value?: VenuePageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'venues': value.venues === undefined ? undefined : ((value.venues as Array<any>).map(VenueDtoToJSON)),
        'page_meta': PageMetaDtoToJSON(value.pageMeta),
    };
}
