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
    CityDto,
    CityDtoFromJSON,
    CityDtoFromJSONTyped,
    CityDtoToJSON,
} from './CityDto';
import {
    CountryDto,
    CountryDtoFromJSON,
    CountryDtoFromJSONTyped,
    CountryDtoToJSON,
} from './CountryDto';
import {
    VenueProfileDto,
    VenueProfileDtoFromJSON,
    VenueProfileDtoFromJSONTyped,
    VenueProfileDtoToJSON,
} from './VenueProfileDto';

/**
 * 
 * @export
 * @interface VenueDto
 */
export interface VenueDto {
    /**
     * 
     * @type {string}
     * @memberof VenueDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof VenueDto
     */
    name?: string;
    /**
     * 
     * @type {CountryDto}
     * @memberof VenueDto
     */
    country?: CountryDto;
    /**
     * 
     * @type {CityDto}
     * @memberof VenueDto
     */
    city?: CityDto;
    /**
     * 
     * @type {VenueProfileDto}
     * @memberof VenueDto
     */
    profile?: VenueProfileDto;
}

export function VenueDtoFromJSON(json: any): VenueDto {
    return VenueDtoFromJSONTyped(json, false);
}

export function VenueDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenueDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'country': !exists(json, 'country') ? undefined : CountryDtoFromJSON(json['country']),
        'city': !exists(json, 'city') ? undefined : CityDtoFromJSON(json['city']),
        'profile': !exists(json, 'profile') ? undefined : VenueProfileDtoFromJSON(json['profile']),
    };
}

export function VenueDtoToJSON(value?: VenueDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'country': CountryDtoToJSON(value.country),
        'city': CityDtoToJSON(value.city),
        'profile': VenueProfileDtoToJSON(value.profile),
    };
}

