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
 * @interface V2PostVenues
 */
export interface V2PostVenues {
    /**
     * 
     * @type {string}
     * @memberof V2PostVenues
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V2PostVenues
     */
    countryId: string;
    /**
     * 
     * @type {string}
     * @memberof V2PostVenues
     */
    cityId?: string;
    /**
     * 
     * @type {VenueProfileDto}
     * @memberof V2PostVenues
     */
    profile?: VenueProfileDto;
}

export function V2PostVenuesFromJSON(json: any): V2PostVenues {
    return V2PostVenuesFromJSONTyped(json, false);
}

export function V2PostVenuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PostVenues {
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

export function V2PostVenuesToJSON(value?: V2PostVenues | null): any {
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

