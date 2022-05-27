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
    VenueProfileDto,
    VenueProfileDtoFromJSON,
    VenueProfileDtoFromJSONTyped,
    VenueProfileDtoToJSON,
} from './VenueProfileDto';

/**
 * 
 * @export
 * @interface VenueEditDto
 */
export interface VenueEditDto {
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    countryId: string;
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    cityId?: string;
    /**
     * 
     * @type {VenueProfileDto}
     * @memberof VenueEditDto
     */
    profile?: VenueProfileDto;
}

export function VenueEditDtoFromJSON(json: any): VenueEditDto {
    return VenueEditDtoFromJSONTyped(json, false);
}

export function VenueEditDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenueEditDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'countryId': json['country_id'],
        'cityId': !exists(json, 'city_id') ? undefined : json['city_id'],
        'profile': !exists(json, 'profile') ? undefined : VenueProfileDtoFromJSON(json['profile']),
    };
}

export function VenueEditDtoToJSON(value?: VenueEditDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'country_id': value.countryId,
        'city_id': value.cityId,
        'profile': VenueProfileDtoToJSON(value.profile),
    };
}

