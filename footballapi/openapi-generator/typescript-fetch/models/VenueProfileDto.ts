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
/**
 * 
 * @export
 * @interface VenueProfileDto
 */
export interface VenueProfileDto {
    /**
     * 
     * @type {number}
     * @memberof VenueProfileDto
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof VenueProfileDto
     */
    lng?: number;
    /**
     * 
     * @type {number}
     * @memberof VenueProfileDto
     */
    capacity?: number;
}

export function VenueProfileDtoFromJSON(json: any): VenueProfileDto {
    return VenueProfileDtoFromJSONTyped(json, false);
}

export function VenueProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VenueProfileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lng': !exists(json, 'lng') ? undefined : json['lng'],
        'capacity': !exists(json, 'capacity') ? undefined : json['capacity'],
    };
}

export function VenueProfileDtoToJSON(value?: VenueProfileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lng': value.lng,
        'capacity': value.capacity,
    };
}

